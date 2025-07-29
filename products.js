<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">
    <title>Greenden-products</title>
</head>

<body>
    <!-- Responsive navbar -->
    <nav class="bg-green-200 p-5 flex items-center justify-between shadow-xl sticky top-0 z-10">
        <h1 class="text-2xl font-bold">Greenden</h1>
        <svg id="menuicon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6 md:hidden">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <ul class="flex gap-10 text-gray-500 hidden md:flex">
            <li>
                <a class="hover:underline hover:text-black" href="./index.html">Home</a>
            </li>
            <li>
                <a class="hover:underline hover:text-black" href="./products.html">Product</a>
            </li>
            <li>
                <a class="hover:underline hover:text-black" href="./contact.html">Contact</a>
            </li>
        </ul>
    </nav>
    <!-- Side navbar -->
    <nav id="sidenav" class="bg-green-200 fixed z-20 top-0 transition-all duration-1000 "
        style="width: 50%; height: 100vh; right: -50%; ">
        <div class="text-right p-10">
            <p id="close-sidenavbar" class="inline cursor-pointer">X</p>
        </div>
        <ul class="flex flex-col gap-10 text-gray-500 items-center  ">
            <li>
                <a class="hover:underline hover:text-black" href="./index.html">Home</a>
            </li>
            <li>
                <a class="hover:underline hover:text-black" href="./products.html">Product</a>
            </li>
            <li>
                <a class="hover:underline hover:text-black" href="./contact.html">Contact</a>
            </li>
        </ul>
    </nav>
    <!-- Products -->
    <section class="text-center p-10">
        <h1 class="font-bold text-3xl ">Our Products</h1>
        <input id="prodsearch" type="text" placeholder="Search for products..." class="border border-black p-2 m-2" style="width: 80%;">
        <div id="searchcontainer" class="grid grid-cols-4 pt-10">
            <div>
                <img src="./images/product-1.png" alt=""
                    class="inline hover:shadow-2xl mb-5 transform hover:-translate-y-2">
                <h3 class="font-bold">Haworthiopsis attenuata plant</h3>
                <p>$100.00</p>
            </div>
            <div>
                <img src="./images/product-2.png" alt=""
                    class="inline hover:shadow-2xl mb-5 transform hover:-translate-y-2">
                <h3 class="font-bold">Chinese Money plant</h3>
                <p>$200.00</p>
            </div>
            <div>
                <img src="./images/product-3.png" alt=""
                    class="inline hover:shadow-2xl mb-5 transform hover:-translate-y-2">
                <h3 class="font-bold">Hanging plant</h3>
                <p>$300.00</p>
            </div>
            <div>
                <img src="./images/product-4.png" alt=""
                    class="inline hover:shadow-2xl mb-5 transform hover:-translate-y-2">
                <h3 class="font-bold">Bougainvillea plant</h3>
                <p>$400.00</p>
            </div>
            <div>
                <img src="./images/product-5.png" alt=""
                    class="inline hover:shadow-2xl mb-5 transform hover:-translate-y-2">
                <h3 class="font-bold">Cyclamen persicum plant</h3>
                <p>$500.00</p>
            </div>
            <div>
                <img src="./images/product-6.png" alt=""
                    class="inline hover:shadow-2xl mb-5 transform hover:-translate-y-2">
                <h3 class="font-bold">Swiss Cheese Plant</h3>
                <p>$600.00</p>
            </div>
            <div>
                <img src="./images/product-7.png" alt=""
                    class="inline hover:shadow-2xl mb-5 transform hover:-translate-y-2">
                <h3 class="font-bold">Snake plant</h3>
                <p>$700.00</p>
            </div>
            <div>
                <img src="./images/product-8.png" alt=""
                    class="inline hover:shadow-2xl mb-5 transform hover:-translate-y-2">
                <h3 class="font-bold">Arrowhead Plant</h3>
                <p>$800.00</p>
            </div>
        </div>
    </section>
    <!-- Footer -->
    <section class="bg-green-200 p-10 flex flex-col gap-5">
        <h1 class="font-bold text-4xl">GREENDEN</h1>
        <p>The standard chunk is used since the 1500s is reprodused below for those interest</p>
        <p>@ 2021 Greenden.com</p>

    </section>

<script src="products.js"></script>

</body>

</html>
