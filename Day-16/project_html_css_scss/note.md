# Cấu trúc folder dự án

index.html --> file chạy chihs
scss --> chứa các file scss 
    - style.scss --> File chạy chính scss (nối các file khác)
    - partials
        - _base.scss
        - _reset.scss
        - _variables.scss
        - _mixin.scss
    - components
        - _header.scss
        - _footer.scss
        - _breadcrumb.scss
    - pages
        - home
            - _hero.scss
            - _products.scss
        - products
            - _best_seller.scss
            - _new_products.scss
images--> chứa các file ảnh
fonts--> chứa các file fonts
css --> các file dc generate từ scss
pages --> các file html tương tứng với các trang: about.html, products.html, news.html....
