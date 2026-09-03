const toast = document.querySelector('.copy-toast');
let toastTimer;

document.querySelectorAll('[data-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    const value = button.dataset.copy;
    try {
      await navigator.clipboard.writeText(value);
      button.textContent = 'Copied';
      toast.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        toast.classList.remove('show');
        button.textContent = 'Copy';
      }, 1600);
    } catch {
      button.textContent = 'Select';
      const range = document.createRange();
      range.selectNode(button.closest('.command-row').querySelector('code'));
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    }
  });
});
