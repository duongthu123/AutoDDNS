# AutoDDNS
- Auto update ip trên cloudflare như ddns của noip

# Cách sử dụng:
- Cần chuẩn bị:
  + 1 domain có nối với cloudflare
  + nodejs v21.6.2 trở lên

- Setup:
  + Lấy api key của acc cloudflare ghi vào .env
  + Những phần còn lại trong file env như trên trừ phần record id
  + phần record id bạn cần vào get-id.js nhập tt vào phần zone, mail, api_key sau đó chạy file bằng lệnh: node get-id.js bạn sẽ có record id để nhập vào

# Sau khi làm xong tất cả setup:
  + Mở file AutoDDNS.exe lên và chạy thôi 
