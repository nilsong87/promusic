// Inicialização
        document.addEventListener('DOMContentLoaded', function() {
            // Inicializar AOS
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });
            
            
            
            // Renderizar produtos
            renderProducts(products);
            
            // Configurar filtros
            setupFilters();
            
            // Configurar scroll do navbar
            setupNavbarScroll();
            
            // Configurar smooth scrolling
            setupSmoothScrolling();
        });

        // Dados dos produtos
        const products = [
            {
                id: 1,
                name: "Violão Acústico Giannini",
                description: "Violão acústico com ótima sonoridade, ideal para iniciantes e profissionais. Inclui capa e palhetas. Com cordas de aço e ótima ressonância, este violão oferece um timbre quente e equilibrado para diversos estilos musicais.",
                price: "R$ 650,00",
                originalPrice: "R$ 800,00",
                image: "/images/violaogiannini.webp",
                condition: "Novo",
                category: "Cordas",
                status: "Produto novo na caixa",
                brand: "Giannini",
                whatsappMessage: "Olá, gostaria de comprar o Violão Acústico Giannini - R$ 650,00"
            },
            {
                id: 2,
                name: "Pedal Distortion Boss DS-1",
                description: "Pedal de distorção clássico da Boss, som característico e robustez incomparável. Perfeito para rock, metal e outros gêneros que exigem um drive agressivo e sustain prolongado.",
                price: "R$ 380,00",
                originalPrice: "R$ 450,00",
                image: "/images/pedal-boss-ds1.webp",
                condition: "Usado",
                category: "Pedais",
                status: "Usado, em perfeito estado",
                brand: "Boss",
                whatsappMessage: "Olá, gostaria de comprar o Pedal Distortion Boss DS-1 - R$ 380,00"
            },
            {
                id: 3,
                name: "Suporte para Guitarra",
                description: "Suporte ajustável para guitarra ou baixo, protege o instrumento e evita quedas. Design robusto e base antiderrapante para máxima segurança.",
                price: "R$ 120,00",
                originalPrice: "R$ 150,00",
                image: "/images/suporte-guitar.jpg",
                condition: "Novo",
                category: "Acessórios",
                status: "Novo na embalagem",
                brand: "Hercules",
                whatsappMessage: "Olá, gostaria de comprar o Suporte para Guitarra - R$ 120,00"
            },
            {
                id: 4,
                name: "Pedal Delay TC Electronic",
                description: "Pedal de delay com múltiplos modos e memória de presets, qualidade de estúdio. Oferece desde delays analógicos clássicos até delays modernos com modulação.",
                price: "R$ 520,00",
                originalPrice: "R$ 600,00",
                image: "/images/Delay TC.jpg",
                condition: "Usado",
                category: "Pedais",
                status: "Pouco uso, como novo",
                brand: "TC Electronic",
                whatsappMessage: "Olá, gostaria de comprar o Pedal Delay TC Electronic - R$ 520,00"
            },
            {
                id: 5,
                name: "Guitarra Stratocaster Fender",
                description: "Guitarra elétrica modelo Stratocaster, cor sunburst, com case e amplificador. O modelo mais icônico da história do rock, com captadores single-coil que oferecem um som cristalino e versátil.",
                price: "R$ 2.900,00",
                originalPrice: "R$ 3.500,00",
                image: "/images/fender.webp",
                condition: "Usado",
                category: "Cordas",
                status: "Usada, em ótimo estado",
                brand: "Fender",
                whatsappMessage: "Olá, gostaria de comprar a Guitarra Stratocaster Fender - R$ 2.900,00"
            },
            {
                id: 6,
                name: "Cabos P10 Monster",
                description: "Cabos de instrumento de alta qualidade, blindagem premium e conectores dourados. Elimina ruídos e interfereências, mantendo a integridade do sinal do seu instrumento.",
                price: "R$ 180,00",
                originalPrice: "R$ 220,00",
                image: "/images/P10 Monster.webp",
                condition: "Novo",
                category: "Acessórios",
                status: "Novo na embalagem",
                brand: "Monster",
                whatsappMessage: "Olá, gostaria de comprar os Cabos P10 Monster - R$ 180,00"
            }
        ];

        // Função para renderizar os produtos
        function renderProducts(productsToRender) {
            const productGrid = document.getElementById('product-grid');
            productGrid.innerHTML = '';
            
            productsToRender.forEach(product => {
                const col = document.createElement('div');
                col.className = 'col-md-6 col-lg-4 mb-4';
                col.setAttribute('data-aos', 'fade-up');
                col.innerHTML = `
                    <div class="card product-card h-100">
                        <span class="product-badge">${product.condition}</span>
                        <img src="${product.image}" class="card-img-top product-image" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">${product.name}</h5>
                            <p class="card-text text-muted">${product.description.substring(0, 80)}...</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <span class="text-primary fw-bold fs-4">${product.price}</span>
                                    ${product.originalPrice ? `<span class="text-decoration-line-through text-muted ms-2">${product.originalPrice}</span>` : ''}
                                </div>
                            </div>
                        </div>
                        <div class="card-footer bg-transparent border-0">
                            <button class="btn btn-neon btn-neon-primary w-100 view-details" data-product-id="${product.id}">
                                Ver Detalhes
                            </button>
                        </div>
                    </div>
                `;
                
                productGrid.appendChild(col);
            });
            
            // Adicionar event listeners aos botões
            document.querySelectorAll('.view-details').forEach(button => {
                button.addEventListener('click', function() {
                    const productId = this.getAttribute('data-product-id');
                    const product = products.find(p => p.id === parseInt(productId));
                    showProductDetails(product);
                });
            });
        }

        // Função para mostrar detalhes do produto no modal
        function showProductDetails(product) {
            document.getElementById('modalTitle').textContent = product.name;
            document.getElementById('modalImage').src = product.image;
            document.getElementById('modalImage').alt = product.name;
            document.getElementById('modalDescription').textContent = product.description;
            document.getElementById('modalPrice').textContent = product.price;
            document.getElementById('modalCondition').textContent = product.condition;
            document.getElementById('modalCategory').textContent = product.category;
            document.getElementById('modalStatus').textContent = product.status;
            document.getElementById('modalBrand').textContent = product.brand;
            
            // Configurar link do WhatsApp
            const whatsappLink = document.getElementById('whatsappLink');
            const encodedMessage = encodeURIComponent(product.whatsappMessage);
            whatsappLink.href = `https://wa.me/5571994073669?text=${encodedMessage}`;
            
            // Abrir modal
            const productModal = new bootstrap.Modal(document.getElementById('productModal'));
            productModal.show();
        }

        // Função para filtrar produtos
        function setupFilters() {
            const filterButtons = document.querySelectorAll('[data-filter]');
            
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remover classe active de todos os botões
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Adicionar classe active ao botão clicado
                    this.classList.add('active');
                    
                    // Obter filtro
                    const filter = this.getAttribute('data-filter');
                    
                    // Filtrar produtos
                    let filteredProducts = products;
                    
                    if (filter !== 'all') {
                        filteredProducts = products.filter(product => 
                            product.condition.toLowerCase() === filter || 
                            product.category.toLowerCase() === filter
                        );
                    }
                    
                    // Renderizar produtos filtrados
                    renderProducts(filteredProducts);
                });
            });
        }

        // Configurar scroll do navbar
        function setupNavbarScroll() {
            const navbar = document.querySelector('.navbar');
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
        }

        // Configurar smooth scrolling
        function setupSmoothScrolling() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        }