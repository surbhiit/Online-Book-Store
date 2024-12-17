// Script for scrolling recipe items
document.addEventListener('DOMContentLoaded', () => {
    const recipeItems = document.querySelector('.recipe-items');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
  
    prevBtn.addEventListener('click', () => {
      recipeItems.scrollBy({ left: -200, behavior: 'smooth' });
    });
  
    nextBtn.addEventListener('click', () => {
      recipeItems.scrollBy({ left: 200, behavior: 'smooth' });
    });
  });
  