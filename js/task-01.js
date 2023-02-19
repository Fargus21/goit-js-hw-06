const categoriesItems = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesItems.length);

for (const items of categoriesItems) {
    console.log('Category:', items.firstElementChild.textContent);
    console.log('Elements:', items.lastElementChild.children.length);
};