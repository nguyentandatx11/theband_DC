function toast({
    title ='', message ='', type ='warn', duration = 3000
}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');
        // Auto Remove
        const autoRemoved = setTimeout(function() {
            main.removeChild(toast);
        }, duration + 1000)

        // Remove when click;
        toast.onclick = function(e) {
            if(e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoved);
            }
        }

        const icons = {
            success: 'fas fa-circle-check',
            warn: 'fas fa-circle-exclamation',
            danger: 'fas fa-circle-xmark'
        }
        
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);

        toast.className = `toast toast--${type}`;
        toast.style.animation = `slideInLeft linear 0.3s,
        fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML = `
                <div class="toast__icon">
                    <i class="${icon}"></i>
                </div>
                <div class="toast__body">
                    <div class="toast__title">${title}</div>
                    <div class="toast__msg">${message}</div>
                </div>
                <div class="toast__close">
                    <i class="fa-solid fa-xmark"></i>
                </div>
        `;
        main.appendChild(toast);
    }
}
function showSuccessToast() {
    toast({
    title: 'Thành Công!',
    message: 'Bạn đã đăng kí thành công Tài khoản trên hệ Thống!',
    type: 'success',
    duration: 1000
    });
}
function showWarnToast() {
    toast({
    title: 'Oops!',
    message: 'Có lỗi vui lòng thử lại!',
    type: 'warn',
    duration: 2000
    });
}
function showDangerToast() {
    toast({
    title: 'Thất bại!',
    message: 'Vui lòng kiểm tra lại thông tin hoặc liên hệ với nhà sản xuất!',
    type: 'danger',
    duration: 3000
    });
}

export default toast;

