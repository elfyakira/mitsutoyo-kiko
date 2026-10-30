/**
 * お問い合わせフォーム 通知GAS（三豊機工 HP 用）
 *
 * 汎用テンプレート（C:\task\問い合わせフォーム構築セット\02_GAS通知コード.gs）を
 * このサイトのフォーム項目（お問い合わせ種別 / お名前 / 会社名 ほか）に合わせたもの
 *
 * 【設置手順】
 * 1. このフォームに紐づくスプレッドシートを開く
 * 2. メニュー「拡張機能」→「Apps Script」
 * 3. このコードを貼り付けて保存
 * 4. 下の NOTIFY_TO / SUBJECT_PREFIX を自分の設定に書き換える
 * 5. 左メニュー「トリガー」→「トリガーを追加」
 *    - 実行する関数: onFormSubmit
 *    - イベントのソース: スプレッドシートから  ← ⚠️ 必ずこちら
 *    - イベントの種類: フォーム送信時
 * 6. 保存（初回は権限の承認が必要）
 * 7. testNotification を手動実行して動作確認
 *
 * 【特徴】
 * - 質問文が変わっても壊れない（全回答を動的に整形）
 * - 項目追加時もコード変更不要
 * - メールアドレス項目があれば自動で Reply-To に設定
 * - e が空でもクラッシュしない防御コーディング
 * - 通知ログをシート「通知ログ」に自動記録
 *
 * 【トラブル時】
 * - "The JavaScript runtime exited unexpectedly" → トリガーのソースが
 *   「Googleフォームから」になっていないか確認（必ず「スプレッドシートから」）
 * - debugOnFormSubmit を一時的にトリガーに差し替えれば e の中身を確認可能
 */

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 設定（ここを書き換える）
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

var NOTIFY_TO = 'office@mitsutoyo.co.jp'; // ← 通知先メールアドレス（複数はカンマ区切り）
var SUBJECT_PREFIX = '【HPお問い合わせ】'; // ← 件名プレフィックス

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// メイン処理（この関数をトリガーに設定する）
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function onFormSubmit(e) {
  try {
    // e が渡らないケース（エディタから直接実行した等）を救済
    if (!e || !e.namedValues) {
      var msg = 'イベントオブジェクトが空です。トリガーが「スプレッドシートから→フォーム送信時」で設定されているか確認してください。';
      console.error(msg);
      safeLog('-', 'スキップ: ' + msg);
      return;
    }

    var responses = e.namedValues;

    // 件名に使う「お名前」と Reply-To に使う「メールアドレス」を取り出す
    // （存在しないフォームでも壊れない）
    var name = getValue(responses, 'お名前 / 会社名');
    var email = getValue(responses, 'メールアドレス');
    var type = getValue(responses, 'お問い合わせ種別');

    var subject = SUBJECT_PREFIX
      + (type ? '[' + type + '] ' : '')
      + (name ? name + '様より' : '')
      + '新しいお問い合わせがありました（'
      + Utilities.formatDate(new Date(), 'Asia/Tokyo', 'M/d HH:mm')
      + '）';

    // 全回答を整形（質問文が変わっても壊れない）
    var body = ''
      + '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n'
      + '  ホームページからのお問い合わせ\n'
      + '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n';

    var count = 0;
    for (var key in responses) {
      if (!Object.prototype.hasOwnProperty.call(responses, key)) continue;
      if (key === 'Timestamp' || key === 'タイムスタンプ') continue;

      var val = responses[key];
      var answer = '未入力';
      if (val && val.length > 0) {
        var joined = val.join(', ');
        if (joined && joined.length > 0) answer = joined;
      }
      body += '■ ' + key + '\n' + answer + '\n\n';
      count++;
    }

    body += '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n'
      + '回答数: ' + count + '問\n'
      + 'このメールはホームページのお問い合わせフォームから自動送信されています。\n';

    var mailOptions = {
      to: NOTIFY_TO,
      subject: subject,
      body: body
    };

    // メールアドレスが入力されていれば Reply-To に設定
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      mailOptions.replyTo = email;
    }

    MailApp.sendEmail(mailOptions);

    safeLog(NOTIFY_TO, '成功');

  } catch (error) {
    // catch 内でさらに失敗してもランタイム全体は落とさない
    console.error('onFormSubmit failed: ' + (error && error.message));
    try {
      safeLog(NOTIFY_TO, 'エラー: ' + (error && error.message));
    } catch (logError) {
      console.error('logging failed: ' + (logError && logError.message));
    }
  }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ユーティリティ
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function getValue(responses, key) {
  if (!responses) return '';
  var val = responses[key];
  if (!val || val.length === 0) return '';
  return val[0] || '';
}

// ログ書き込みも失敗を握りつぶす（ランタイムを落とさない）
function safeLog(to, status) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    if (!ss) return;
    var logSheet = ss.getSheetByName('通知ログ');
    if (!logSheet) {
      logSheet = ss.insertSheet('通知ログ');
      logSheet.appendRow(['日時', '通知先', 'ステータス']);
      logSheet.getRange(1, 1, 1, 3).setFontWeight('bold');
    }
    logSheet.appendRow([new Date(), to, status]);
  } catch (e) {
    console.error('safeLog failed: ' + (e && e.message));
  }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// テスト用（手動実行で動作確認）
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Apps Script エディタの関数セレクタで testNotification を選択 → 実行
// NOTIFY_TO にメールが届けば正常。initial run 時は権限承認が必要。

function testNotification() {
  var testEvent = {
    namedValues: {
      'お問い合わせ種別': ['お問い合わせ'],
      'お名前 / 会社名': ['株式会社テスト 山田 太郎'],
      '電話番号': ['090-1234-5678'],
      'メールアドレス': ['test@example.com'],
      'ご住所': [''],
      'お問い合わせ内容': ['これはテスト送信です。\n改行を含む本文のテストです。'],
      'ご希望の連絡方法': ['どちらでも可']
    }
  };

  onFormSubmit(testEvent);
  Logger.log('テスト通知を送信しました。' + NOTIFY_TO + ' を確認してください。');
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 診断用（実際に発生したイベントをログに吐く）
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// トリガーの動作が怪しいときに、一時的にこの関数をトリガーに差し替えて
// 「実行数」画面で e の中身を確認するために使います
// 使い終わったら元の onFormSubmit に戻してください

function debugOnFormSubmit(e) {
  try {
    console.log('e exists: ' + (!!e));
    console.log('e keys: ' + (e ? Object.keys(e).join(',') : 'n/a'));
    console.log('namedValues: ' + JSON.stringify(e && e.namedValues));
    console.log('values: ' + JSON.stringify(e && e.values));
  } catch (err) {
    console.error('debug failed: ' + (err && err.message));
  }
}
