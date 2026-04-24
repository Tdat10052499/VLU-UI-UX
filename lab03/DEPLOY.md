# Hướng Dẫn Deploy Lên Vercel (Static Site)

Dự án này là một trang web tĩnh (HTML/CSS/JS thuần). Vercel nhận diện và tự động cấu hình host cực kỳ nhanh chóng. Hãy làm theo các bước dưới đây để đưa website của bạn lên môi trường Production.

## Yêu cầu chuẩn bị
- Đã cài đặt **Node.js** trên máy.
- Đã đăng ký tài khoản [Vercel](https://vercel.com).

## Các bước Deploy bằng Vercel CLI

### Bước 1: Trỏ đường dẫn vào thư mục dự án
Mở Terminal (hoặc PowerShell / Command Prompt) và di chuyển vào đúng thư mục `lab03`:
```bash
cd C:\Users\tuand\VLU-UI-UX\lab03
```

### Bước 2: Đăng nhập Vercel CLI
Nếu bạn chưa từng sử dụng Vercel CLI trên máy, hãy chạy lệnh sau để đăng nhập:
```bash
npx vercel login
```
*(Hệ thống sẽ cung cấp cho bạn các lựa chọn như Continue with GitHub/Email... Bạn dùng phím mũi tên để chọn và xác thực trên trình duyệt).*

### Bước 3: Deploy Production
Để đẩy thẳng code lên môi trường chạy thực tế (Production), hãy thực thi lệnh:
```bash
npx vercel --prod
```

### Bước 4: Trả lời các thiết lập mặc định (Chỉ ở lần đầu tiên)
Trong lúc Deploy, Vercel sẽ hỏi bạn vài cấu hình cơ bản. Hãy chọn mặc định như sau:
- **Set up and deploy “~\VLU-UI-UX\lab03”?** [Y/n]: Ấn `Y` (Enter)
- **Which scope do you want to deploy to?**: Trỏ vào tài khoản cá nhân của bạn (Enter)
- **Link to existing project?** [y/N]: Ấn `N` (Enter)
- **What’s your project’s name?**: Ấn `Enter` (Sẽ mặc định tên thư mục)
- **In which directory is your code located?**: Ấn `Enter` (Mặc định `./`)
- **Want to override the settings?** [y/N]: Ấn `N` (Enter)

---

🎉 **Hoàn tất!**
Sau quá trình tải lên ngắn gọn, Terminal sẽ in ra một đường dẫn **Production URL** (ví dụ: `https://lab03-xyz.vercel.app`). Bạn chỉ cần click vào hoặc sao chép link đó là có thể gửi ngay dự án cho mọi người cùng trải nghiệm!
