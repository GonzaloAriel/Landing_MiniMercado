document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const reveals = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            }
        }
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // Navbar scroll effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(10, 10, 10, 0.95)';
            nav.style.height = '70px';
        } else {
            nav.style.background = 'rgba(10, 10, 10, 0.8)';
            nav.style.height = '80px';
        }
    });

    // Form Handling
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simple validation
            const inputs = contactForm.querySelectorAll('input, select, textarea');
            let isValid = true;
            
            inputs.forEach(input => {
                if (input.hasAttribute('required') && !input.value) {
                    isValid = false;
                    input.style.borderColor = '#ef4444';
                } else {
                    input.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                }
            });

            if (isValid) {
                // Simulate submission
                const submitBtn = contactForm.querySelector('button');
                const originalText = submitBtn.innerText;
                submitBtn.innerText = 'Enviando...';
                submitBtn.disabled = true;

                setTimeout(() => {
                    contactForm.style.display = 'none';
                    formSuccess.style.display = 'block';
                    formSuccess.classList.add('reveal', 'active');
                }, 1500);
            }
        });
    }
});


document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('name').value.trim();
    const telefono = document.getElementById('whatsapp').value.trim();
    const negocio = document.getElementById('business').value;
    const mensaje = document.getElementById('message').value.trim();

    if (!nombre || !telefono || !negocio) {
        alert('Completá los campos obligatorios');
        return;
    }

    const texto = `Hola! Soy ${nombre}.
Tengo un ${negocio}.
Teléfono: ${telefono}.
${mensaje ? 'Mensaje: ' + mensaje : ''}

Quiero información sobre MiniMercado.`;

    const numero = "5491122684117"; // ⚠️ CAMBIAR SI QUERÉS

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    // Abrir WhatsApp
    window.open(url, '_blank');

    // Mostrar mensaje de éxito
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
});

const negocioTexto = {
    minimercado: "Minimercado / Almacén",
    kiosco: "Kiosco",
    fiambreria: "Fiambrería",
    otro: "Otro"
}[negocio];