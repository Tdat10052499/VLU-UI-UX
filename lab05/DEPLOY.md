# 🚀 Hướng dẫn Deploy dự án lên Vercel bằng CLI

Dự án này là một Static Site (HTML/CSS/JS thuần), không cần quá trình build phức tạp. Bạn có thể dễ dàng đưa dự án lên mạng (Live) thông qua Vercel CLI chỉ với vài bước đơn giản sau đây.

---

## Bước 1: Đăng nhập vào Vercel CLI
Mở Terminal (hoặc Command Prompt / PowerShell / Terminal trong VS Code) và chạy lệnh sau để kết nối với tài khoản Vercel của bạn:

```bash
npx vercel login
```
*Lưu ý: Màn hình sẽ hiển thị các lựa chọn đăng nhập (GitHub, Email, v.v.). Hãy dùng phím mũi tên để chọn, nhấn `Enter` và xác nhận trên cửa sổ trình duyệt mở ra.*

---

## Bước 2: Di chuyển vào thư mục dự án
Đảm bảo bạn đang đứng đúng ở thư mục chứa mã nguồn của dự án (thư mục `lab05`). Nếu Terminal của bạn đang ở thư mục gốc (VLU-UI-UX), hãy chạy lệnh:

```bash
cd lab05
```

---

## Bước 3: Deploy lên Production
Chạy lệnh sau để tiến hành đẩy dự án thẳng lên môi trường Production (môi trường thực tế):

```bash
npx vercel --prod
```

**Trong quá trình chạy lệnh, Vercel sẽ hỏi bạn một số cấu hình (chỉ hỏi ở lần deploy đầu tiên):**
1. **Set up and deploy? [Y/n]**
   👉 Nhấn `Y` (Yes) và `Enter`.
2. **Which scope do you want to deploy to?**
   👉 Nhấn `Enter` (chọn tài khoản mặc định của bạn).
3. **Link to existing project? [y/N]**
   👉 Nhấn `N` (No) vì đây là dự án mới.
4. **What's your project's name?**
   👉 Nhập tên dự án không dấu (Ví dụ: `premium-delivery-ui`) và `Enter`.
5. **In which directory is your code located?**
   👉 Nhấn `Enter` (để mặc định là thư mục hiện tại `./`).
6. **Want to override the settings? [y/N]**
   👉 Nhấn `N` (No).

---

## 🎉 Hoàn tất!
Đợi vài giây để Vercel upload file. Khi hoàn tất, bạn sẽ thấy thông báo **"Production: https://[tên-dự-án].vercel.app"** xuất hiện trên Terminal.

Hãy copy đường link đó dán vào trình duyệt để trải nghiệm thành quả của bạn, đồng thời dán link vào file `README.md` để nộp bài nhé!
