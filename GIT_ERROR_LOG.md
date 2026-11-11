# Nhật Ký Lỗi Git (Git Error Log) & Hướng Dẫn Khắc Phục

Tài liệu này ghi lại chi tiết lỗi không thể `git push` lên GitHub do vướng file dung lượng lớn (>100MB) trong lịch sử commit và cách xử lý triệt để.

---

## 1. Thông Tin Lỗi (Error Details)

- **Hiện tượng:** Chạy lệnh `git push` bị GitHub từ chối (reject) và không thể đồng bộ code lên repository từ xa.
- **Mã lỗi thường gặp:** `remote: error: GH001: Large files detected` / `this exceeds GitHub's file size limit of 100.00 MB`.
- **File gây lỗi trong dự án:** `images/FreeCAD_1.1.4-Windows-x86_64-py311-installer.exe` (Dung lượng: **~496 MB**).

---

## 2. Nguyên Nhân Gốc Rễ (Root Cause Analysis)

1. **Giới hạn kích thước file của GitHub:**
   - GitHub chỉ cho phép kích thước tối đa của một file thông thường là **100 MB**. Bất kỳ file nào vượt quá dung lượng này đều bị chặn ngay tại tầng pre-receive hook của GitHub server.

2. **Cơ chế lưu trữ lịch sử của Git (Hiểu lầm phổ biến):**
   - File `.exe` nặng 496 MB đã được đưa vào commit `d4ea96e`.
   - Dù ở commit sau (`f737a8d`) bạn có thêm `.gitignore` hay xóa file đó đi, thì **file vẫn tồn tại vĩnh viễn trong commit cũ (`d4ea96e`)**.
   - Khi chạy `git push`, Git sẽ nén và đẩy **toàn bộ lịch sử các commit chưa có trên remote**. Do đó, GitHub phát hiện file nặng trong commit cũ và chặn toàn bộ tiến trình push.

3. **Lỗi cú pháp trong `.gitignore`:**
   - File `.gitignore` bị dính cả câu lệnh bash shell:
     ```text
     echo "*.exe" >> .gitignore
     echo "*.zip" >> .gitignore
     echo "*.rar" >> .gitignore
     ```
     Cú pháp đúng chuẩn chỉ cần tên định dạng hoặc pattern:
     ```text
     *.exe
     *.zip
     *.rar
     ```

---

## 3. Các Bước Khắc Phục Triệt Để (Step-by-Step Solution)

Để xử lý tận gốc, cần đưa con trỏ Git quay trở về thời điểm trước commit bị dính file nặng, sau đó loại bỏ file khỏi Git tracking rồi commit lại.

### Bước 1: Reset Git về commit an toàn gần nhất
Sử dụng lệnh `git reset` (mặc định là *mixed reset*) về commit an toàn trên remote (`origin/main`):
```bash
git reset origin/main
```
> **Lưu ý:** Lệnh này chỉ hủy bỏ các commit bị lỗi trên máy cục bộ, **toàn bộ code, bài viết mới và chỉnh sửa của bạn vẫn được giữ nguyên 100% trong thư mục làm việc**.

### Bước 2: Cập nhật file `.gitignore` chuẩn xác
Tạo hoặc ghi đè lại file `.gitignore` để Git tự động bỏ qua các file cài đặt và file nén:
```bash
cat << 'EOF' > .gitignore
*.exe
*.zip
*.rar
EOF
```

### Bước 3: Thêm lại file, commit và push
Lúc này `git add .` sẽ tự động bỏ qua file `.exe` nhờ file `.gitignore` vừa sửa:
```bash
git add .
git commit -m "update Transformer, YOLO paper and docs"
git push
```

**Kết quả thành công:**
```text
Compressing objects: 100% ...
Writing objects: 100% (16/16), 4.37 MiB ...
To https://github.com/nghungvkck/nghungvkck.github.io.git
   20ada8a..12e1daf  main -> main
```
Dung lượng đẩy lên chỉ còn **4.37 MiB**, không còn dính file 496 MB.

---

## 4. Kinh Nghiệm Phòng Tránh (Best Practices)

1. **Kiểm tra file trước khi commit:**
   - Trước khi `git add .` và `git commit`, hãy chạy `git status` để xem danh sách các file đang chuẩn bị được theo dõi. Tránh add nhầm các file cài đặt `.exe`, file nén `.zip`, file trọng số mô hình AI (`.pth`, `.onnx`, `.pt`, `.safetensors`, `.bin`) nặng hàng trăm MB.
2. **Kiểm tra dung lượng commit:**
   - Có thể kiểm tra nhanh các file lớn được stage trước khi push bằng lệnh:
     ```bash
     find . -type f -size +50M
     ```
3. **Nếu bắt buộc phải lưu file lớn trên Git:**
   - Sử dụng **Git LFS (Large File Storage)** thay vì commit trực tiếp:
     ```bash
     git lfs install
     git lfs track "*.exe"
     ```

