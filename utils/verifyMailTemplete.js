const verifyMailTemplate = (name, otp) => {
  return `
  <!DOCTYPE html>
  <html lang="en" style="margin:0;padding:0;">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Email Verification</title>
  </head>
  <body style="margin:0;padding:0;background:#f4f6f8;font-family:Arial,sans-serif;">
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td align="center" style="padding:24px;">
          <table border="0" cellpadding="0" cellspacing="0" width="600" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,.05);">
            
            <!-- Header -->
            <tr>
              <td align="center" style="padding:24px;background:#2563eb;color:#ffffff;font-size:20px;font-weight:600;">
                Shopping Cart App
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:32px 24px;color:#374151;font-size:16px;line-height:24px;">
                <p style="margin:0 0 16px;">Hi <strong>${name}</strong>,</p>
                <p style="margin:0 0 16px;">Thanks for signing up! Use the following One Time Password (OTP) to verify your email:</p>
                
                <div style="text-align:center;margin:24px 0;">
                  <span style="display:inline-block;font-size:32px;font-weight:700;letter-spacing:8px;color:#111827;background:#f3f4f6;padding:12px 24px;border-radius:8px;">
                    ${otp}
                  </span>
                </div>

                <p style="margin:0 0 16px;">This code is valid for <strong>1 minute</strong>. Please do not share it with anyone.</p>
                <p style="margin:0;">If you didn’t create an account, you can ignore this email.</p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td align="center" style="padding:16px;font-size:12px;line-height:18px;color:#9ca3af;background:#f9fafb;">
                © ${new Date().getFullYear()} Shopping Cart App · All rights reserved.
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
};

export default verifyMailTemplate;
