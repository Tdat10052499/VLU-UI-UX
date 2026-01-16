# 🚀 Deploy VLU Energy Management System to Vercel

## Hướng Dẫn Deploy Lên Vercel

### Phương Pháp 1: Deploy Qua Vercel CLI (Khuyến Nghị)

#### Bước 1: Cài Đặt Vercel CLI

Mở terminal và chạy:

```bash
npm install -g vercel
```

#### Bước 2: Đăng Nhập Vercel

```bash
vercel login
```

Chọn phương thức đăng nhập (GitHub, GitLab, Bitbucket, hoặc Email).

#### Bước 3: Deploy Dự Án

Trong thư mục gốc của dự án (`VLU-UI-UX`), chạy:

```bash
vercel
```

Vercel sẽ hỏi một số câu hỏi:
- **Set up and deploy?** → `Y` (Yes)
- **Which scope?** → Chọn tài khoản của bạn
- **Link to existing project?** → `N` (No)
- **What's your project's name?** → `vlu-energy-management-system` (hoặc tên khác)
- **In which directory is your code located?** → `./` (mặc định)

Vercel sẽ tự động:
1. Phát hiện đây là static site
2. Upload các file
3. Deploy và cung cấp URL

#### Bước 4: Deploy Production

Sau khi test preview, deploy production:

```bash
vercel --prod
```

---

### Phương Pháp 2: Deploy Qua Vercel Dashboard (Giao Diện Web)

#### Bước 1: Đẩy Code Lên GitHub

Nếu chưa có repository, tạo mới:

```bash
# Khởi tạo git (nếu chưa có)
git init

# Add tất cả files
git add .

# Commit
git commit -m "Initial commit - VLU Energy Management System"

# Tạo repo trên GitHub và link
git remote add origin https://github.com/your-username/vlu-ems.git

# Push lên GitHub
git branch -M main
git push -u origin main
```

#### Bước 2: Import Project Vào Vercel

1. Truy cập: https://vercel.com/
2. Click **"Add New"** → **"Project"**
3. Click **"Import Git Repository"**
4. Chọn repository của bạn
5. Click **"Import"**

#### Bước 3: Cấu Hình Project

Vercel sẽ tự động phát hiện cấu hình từ file `vercel.json`. Nếu cần thay đổi:

- **Framework Preset:** Other (hoặc để trống)
- **Root Directory:** `lab01` ⚠️ **QUAN TRỌNG**
- **Build Command:** (để trống)
- **Output Directory:** `.` (dấu chấm)

#### Bước 4: Deploy

Click **"Deploy"** và chờ vài giây!

---

## ⚙️ Cấu Hình Vercel

File `vercel.json` đã được tạo với các thiết lập tối ưu:

```json
{
  "version": 2,
  "name": "vlu-energy-management-system",
  "outputDirectory": "lab01",
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/css/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ],
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**Giải thích:**
- `outputDirectory: "lab01"` - Vercel sẽ serve tất cả files từ thư mục `lab01/`
- URL gốc `/` sẽ tự động load `index.html` từ thư mục `lab01/`
- `cleanUrls: true` - URLs sẽ không có `.html` extension
- `headers` - Tối ưu cache cho CSS/JS files
- `rewrites` - Hỗ trợ SPA routing (Single Page Application)

---

## 🔗 Sau Khi Deploy

### URL Mẫu

Vercel sẽ cung cấp URL theo format:
```
https://vlu-energy-management-system.vercel.app
```

hoặc

```
https://your-project-name-abc123.vercel.app
```

### Custom Domain (Tùy Chọn)

Nếu muốn dùng domain riêng:

1. Vào **Project Settings** → **Domains**
2. Click **"Add"**
3. Nhập domain của bạn
4. Cấu hình DNS theo hướng dẫn

---

## 🔄 Cập Nhật Sau Deploy

### Nếu Deploy Qua CLI:

```bash
# Deploy preview
vercel

# Deploy production
vercel --prod
```

### Nếu Deploy Qua GitHub:

Chỉ cần push code lên GitHub:

```bash
git add .
git commit -m "Update features"
git push
```

Vercel sẽ tự động deploy!

---

## 📱 Test Trước Khi Deploy

Kiểm tra local trước:

```bash
# Cài đặt một static server
npm install -g serve

# Chạy từ thư mục gốc
serve lab01

# Hoặc dùng Python
cd lab01
python -m http.server 8000

# Hoặc dùng PHP
cd lab01
php -S localhost:8000
```

Mở browser: `http://localhost:8000`

---

## ✅ Checklist Trước Deploy

- [x] ✅ File `vercel.json` đã được tạo
- [x] ✅ File `.vercelignore` đã được tạo
- [ ] Kiểm tra tất cả links CSS/JS hoạt động
- [ ] Kiểm tra console không có lỗi
- [ ] Test trên nhiều browsers
- [ ] Test responsive trên mobile
- [ ] Kiểm tra chức năng login
- [ ] Kiểm tra chuyển đổi ngôn ngữ

---

## 🐛 Troubleshooting

### Lỗi: 404 Not Found

**Nguyên nhân:** Routes không đúng

**Giải pháp:** Kiểm tra `vercel.json` và đảm bảo routes map đúng vào `lab01/`

### Lỗi: CSS/JS Không Load

**Nguyên nhân:** Đường dẫn relative không đúng

**Giải pháp:** Kiểm tra trong `index.html`:
```html
<!-- Đúng -->
<link rel="stylesheet" href="css/style.css">
<script src="js/script.js"></script>

<!-- Sai -->
<link rel="stylesheet" href="/css/style.css">
<script src="/js/script.js"></script>
```

### Lỗi: Font Awesome Icons Không Hiện

**Nguyên nhân:** CDN bị block hoặc chậm

**Giải pháp:** Thêm fallback hoặc download Font Awesome về local

---

## 📊 Monitoring

Sau khi deploy, bạn có thể:

1. **Analytics:** Xem lượng truy cập trong Vercel Dashboard
2. **Logs:** Kiểm tra logs nếu có lỗi
3. **Performance:** Xem speed metrics và Core Web Vitals

---

## 🎉 Xong!

Website của bạn đã được deploy và có thể truy cập từ bất kỳ đâu!

Chia sẻ link với giảng viên và bạn bè:
```
https://vlu-energy-management-system.vercel.app
```

---

**Lưu Ý:**
- Vercel miễn phí cho personal projects
- Unlimited bandwidth cho static sites
- Automatic HTTPS
- CDN global
- Instant cache invalidation

**Chúc bạn deploy thành công! 🚀**
