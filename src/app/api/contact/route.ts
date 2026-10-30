import { NextRequest, NextResponse } from 'next/server';
import { googleForm } from '@/lib/site';

// Googleフォーム側の選択肢と文字列を完全一致させること
const CONTACT_TYPES = ['お問い合わせ', '採用応募'];
const CONTACT_METHODS = ['電話', 'メール', 'どちらでも可'];

interface ContactFormData {
  contactType: string;
  name: string;
  phone: string;
  email: string;
  address?: string;
  message: string;
  contactMethod?: string;
}

interface ValidationError {
  field: string;
  message: string;
}

function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone: string): boolean {
  const re = /^[\d\-+() ]+$/;
  return re.test(phone);
}

function validateFormData(data: ContactFormData): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!CONTACT_TYPES.includes(data.contactType)) {
    errors.push({ field: 'contactType', message: 'お問い合わせ種別を選択してください' });
  }

  if (!data.name || !data.name.trim()) {
    errors.push({ field: 'name', message: 'お名前を入力してください' });
  } else if (data.name.length > 100) {
    errors.push({ field: 'name', message: 'お名前は100文字以内で入力してください' });
  }

  if (!data.phone || !data.phone.trim()) {
    errors.push({ field: 'phone', message: '電話番号を入力してください' });
  } else if (!validatePhone(data.phone)) {
    errors.push({ field: 'phone', message: '電話番号の形式が正しくありません' });
  }

  if (!data.email || !data.email.trim()) {
    errors.push({ field: 'email', message: 'メールアドレスを入力してください' });
  } else if (!validateEmail(data.email)) {
    errors.push({ field: 'email', message: 'メールアドレスの形式が正しくありません' });
  }

  if (!data.message || !data.message.trim()) {
    errors.push({ field: 'message', message: 'お問い合わせ内容を入力してください' });
  } else if (data.message.trim().length < 10) {
    errors.push({ field: 'message', message: '10文字以上でご入力ください' });
  } else if (data.message.length > 5000) {
    errors.push({ field: 'message', message: '5000文字以内でご入力ください' });
  }

  if (data.contactMethod && !CONTACT_METHODS.includes(data.contactMethod)) {
    errors.push({ field: 'contactMethod', message: 'ご希望の連絡方法を選択してください' });
  }

  return errors;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // サーバーサイドバリデーション
    const errors = validateFormData(body);
    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }

    // Googleフォーム（formResponse）へサーバーサイドから送信
    const { entries } = googleForm;
    const params = new URLSearchParams();
    params.append(entries.contactType, body.contactType);
    params.append(entries.name, body.name.trim());
    params.append(entries.phone, body.phone.trim());
    params.append(entries.email, body.email.trim());
    if (body.address?.trim()) {
      params.append(entries.address, body.address.trim());
    }
    params.append(entries.message, body.message.trim());
    if (body.contactMethod) {
      params.append(entries.contactMethod, body.contactMethod);
    }

    const response = await fetch(googleForm.formUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });

    if (!response.ok) {
      throw new Error(`Google Form submission failed: ${response.status}`);
    }

    return NextResponse.json({
      success: true,
      message: 'お問い合わせを受け付けました',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      {
        success: false,
        errors: [
          {
            field: 'general',
            message: '送信中にエラーが発生しました。しばらく経ってから再度お試しください。',
          },
        ],
      },
      { status: 500 }
    );
  }
}
