const filterButtons = document.querySelectorAll(".filter-btn");
const products = document.querySelectorAll(".product");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.dataset.filter;

        products.forEach(product => {

            const category = product.dataset.category;

            if(filter === "all" || category === filter){
                product.classList.remove("hide");
            }else{
                product.classList.add("hide");
            }

        });

    });

});