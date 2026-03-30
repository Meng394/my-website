document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const productDetail = document.getElementById('product-detail');

    if (productId && products[productId]) {
        const product = products[productId];
        
        productDetail.innerHTML = `
            <div class="product-header">
                <div class="product-icon">${product.icon}</div>
                <h1 class="product-title">${product.title}</h1>
            </div>
            <p class="product-description">${product.description}</p>
            <div class="product-features">
                <h3>主要功能</h3>
                <ul>
                    ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            <div class="product-cta">
                <a href="index.html" class="cta-button">了解其他产品</a>
            </div>
        `;
    } else {
        productDetail.innerHTML = `
            <div class="product-header">
                <h1 class="product-title">产品未找到</h1>
            </div>
            <p class="product-description">抱歉，您查找的产品不存在。</p>
            <div class="product-cta">
                <a href="index.html" class="cta-button">返回首页</a>
            </div>
        `;
    }
});