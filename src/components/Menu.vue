<template>
    <div>
        <div class="banner-background">
            
        </div>
        <Header class="dark" />
        <section>
            <div class="section-title">~ Specialty Pizza ~</div>
        </section>
        <section>
            <div class="section-title">Create your own Pizza</div>
        </section>
        <section>
            <div class="section-title">Wings</div>
        </section>
        <section>
            <div class="section-title">Pasta</div>
            <div class="foodlist">
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="PASTA POMODORO"
                :prices="[9.07]"
                desc = "Pasta in tomato sauce with fresh basil and parmesan cheese."
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="PENNE GARLIC SAUCE"
                :prices="[12.85]"
                desc = "Grilled Chicken with Mixed Seasonal Vegetables in garlic Olive Oil."
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="PENNE ALLA VODKA"
                :prices="[12.85]"
                desc = "Cut bacon in Rose Sauce."
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="SPAGHETTI MEATBALL"
                :prices="[12.85]"
                desc = "Spaghetti and Italian meatballs."
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="SPAGHETTI VEGGIE"
                :prices="[12.85]"
                desc = "Broccoli, zucchini, eggplant, mushroom, onions."
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="PENNE ALLA CACCIATORA"
                :prices="[13.85]"
                desc = "Chicken, onions, mushroom, roasted red peppers in Rose sauce."
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="SPAGHETTI PUTTANESCA"
                :prices="[12.85]"
                desc = "Anchovies, black olive, mushroom, Jalapeno, garlic, parsley, onions in tomato sauce."
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="PENNE CHICKEN & SPINACH"
                :prices="[13.85]"
                desc = "Chicken & Spinach in Tomato Sauce."
            />
            </div>
            
            
        </section>
        <section>
            <div class="section-title">Vegetables</div>
            <div class="foodlist">
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="VEGETABLE SPRING ROLLS (2 Rolls)"
                :prices="[2.65]"
                desc = "Golden Fried Vegetarian Spring Rolls served with sweet & sour plum sauce."
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="THAI EGGPLANT"
                :prices="[12.85]"
                desc = "Stir-fried eggplant in oyster sauce with basil leaf."
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="MIXED VEGETABLES"
                :prices="[11.95]"
                desc = "Stir-fried vegetables with snow peas, mushroom, broccoli in garlic sauce."
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="RED CURRY VEGETABLES"
                :prices="[12.85]"
                desc = "Vegetables with tofu and red curry in coconut milk sauce."
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="GREEN CURRY VEGETABLES"
                :prices="[12.85]"
                desc = "Vegetables with tofu and green curry in coconut milk sauce."
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="BASIL TOFU"
                :prices="[11.95]"
                desc = "Stir-fried tofu in oyster sauce with basil leaf."
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="SPICY COCONUT VEGETABLES"
                :prices="[12.85]"
                desc = "Stir-fried vegetables with snow peas, mushroom, broccoli, and coconut sauce"
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="VEGETABLES IN BLACK BEAN SAUCE"
                :prices="[11.95]"
                desc = "Stir-fried vegetables with Black Bean Sauce."
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="MAPO TOFU"
                :prices="[11.95]"
                desc = "Tofu stir fried in chilli oyster sauce."
            />
            </div>
        </section>
        <section>
            <div class="section-title">Noodles</div>
            <div class="foodlist">
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="PAD THAI"
                :meats="['veggie', 'chicken', 'beef', 'shrimp']"
                :prices="[11.95, 11.95, 11.95, 11.95]"
                desc = "Rice noodle, tofu, eggs in tamarind and tomato sauce with roasted peanuts, bean sprouts and green onions."
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="THAI SPICY NOODLE"
                :meats="['veggie', 'chicken', 'beef', 'shrimp']"
                :prices="[11.95, 11.95, 11.95, 11.95]"
                desc = "Rice noodle with chilli, basil leaves and vegetables."
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="GLASS NOODLE"
                :meats="['veggie', 'chicken', 'beef', 'shrimp']"
                :prices="[11.95, 11.95, 11.95, 11.95]"
                desc = "Transparent bean noodle with egg, and vegetables."
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="SHANGHAI NOODLE"
                :meats="['veggie', 'chicken', 'beef', 'shrimp']"
                :prices="[11.95, 11.95, 11.95, 11.95]"
                desc = "Shanghai noodles, and cabbage are flavoured with hoisin sauce"
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="STIR-FRIED PHO NOODLE"
                :meats="['veggie', 'chicken', 'beef', 'shrimp']"
                :prices="[11.95, 11.95, 11.95, 11.95]"
                desc = "Flat rice noodle with green and red peppers, onions, bean sprout in garlic sauce."
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="CHOW MEIN"
                :meats="['veggie', 'chicken', 'beef', 'shrimp']"
                :prices="[11.95, 11.95, 11.95, 11.95]"
                desc = "Stir-fried egg noodle with vegetables."
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="CURRY PAD THAI"
                :meats="['veggie', 'chicken', 'beef', 'shrimp']"
                :prices="[11.95, 11.95, 11.95, 13.95]"
                desc = "Thai rice noodle, tofu, eggs in coconut sauce with peanuts, bean sprouts, and green onions."
            />
            </div>

        </section>
        <section>
            <div class="section-title">Vermecelli</div>
            <div class="foodlist">
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="SINGAPORE VERMICELLI"
                :meats="['veggie', 'chicken', 'beef', 'shrimp']"
                :prices="[11.95, 11.95, 11.95, 12.85]"
                desc = "Thin rice noodle with vegetables, onions, bean sprouts in a yellow curry sauce"
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="STIR-FRIED VERMICELLI"
                :meats="['veggie', 'chicken', 'beef', 'shrimp']"
                :prices="[11.95, 11.95, 11.95, 12.85]"
                desc = "Vermicelli noodle with green and red peppers, onions, bean sprout in garlic sauce."
            />
            </div>
        </section>
        <section>
            <div class="section-title">Shrimp</div>
            <div class="foodlist">
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="BASIL SHRIMP"
                :prices="[13.85]"
                desc = "Stir-fried shrimp with garlic, onion, and basil leaves"
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="GARLIC SHRIMP"
                :prices="[13.85]"
                desc = "Stir-fried shrimp with vegetables in a garlic sauce"
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="GREEN CURRY SHRIMP"
                :prices="[13.85]"
                desc = "Shrimp in Green curry sauce, coconut milk and vegetables"
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="RED CURRY SHRIMP"
                :prices="[13.85]"
                desc = "Shrimp in Red curry sauce, coconut milk and vegetables"
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="COCONUT ROSE SHRIMP"
                :prices="[13.85]"
                desc = "Shrimp served in Coconut Rose Sauce on rice"
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="THAI EGGPLANT SHRIMP"
                :prices="[13.85]"
                desc = "Stir-fried shrimp with eggplant and onion"
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="VEGETABLE SPRING ROLLS (2 Rolls)"
                :prices="[2.65]"
                desc = "Golden Fried Vegetarian Spring Rolls served with sweet & sour plum sauce."
            />
            </div>
        </section>
        <section>
            <div class="section-title">Chicken</div>
            <div class="foodlist">
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="CASHEW NUT CHICKEN"
                :prices="[12.85]"
                desc = "Chicken with roasted cashew nuts, sweet peppers and onions"
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="BASIL CHICKEN"
                :prices="[11.95]"
                desc = "Stir-fried chicken with basil leaves, garlic and peppers"
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="GINGER CHICKEN"
                :prices="[11.95]"
                desc = "Stir-fried chicken with shredded ginger, broccoli, red and green peppers"
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="GREEN CURRY CHICKEN"
                :prices="[12.85]"
                desc = "Green curry with chicken, fresh basil, coconut milk and veggies"
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="RED CURRY CHICKEN"
                :prices="[12.85]"
                desc = "Red curry with chicken, fresh basil, coconut milk and veggies"
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="SWEET & SOUR CHICKEN"
                :prices="[11.95]"
                desc = "Lightly stir-fried chicken with green and red peppers, pineapples and onions"
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="GENERAL TAO’S CHICKEN"
                :prices="[11.95]"
                desc = "Stir-fried chicken pieces in a sweet and spicy sauce"
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="CHILLI LEMONGRASS CHICKEN"
                :prices="[12.85]"
                desc = "Stir-fried chicken with lemongrass and chilli peppers"
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="THAI EGGPLANT CHICKEN"
                :prices="[12.85]"
                desc = "Stir-fried chicken with eggplant and onions"
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="COCONUT ROSE SAUCE w/ CHICKEN"
                :prices="[12.85]"
                desc = "Chicken served with Coconut Rose Sauce on rice."
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="VEGETABLES w/ CHICKEN"
                :prices="[11.95]"
                desc = "Chicken served with stir-fried mixed vegetables."
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="CHICKEN w/ BROCCOLI"
                :prices="[12.85]"
                desc = "Stir-fried chicken with broccoli in salty black bean sauce."
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="MAPO TOFU w/ CHICKEN"
                :prices="[11.95]"
                desc = "Chicken & tofu stir fried with chilli and oyster sauce."
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="CHICKEN w/ SAUTEED MUSHROOM"
                :prices="[12.85]"
                desc = "Stir-fried beef with mushrooms in salty black bean sauce."
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="CHICKEN, TOMATO, & PINEAPPLE"
                :prices="[12.85]"
                desc = "Onion, Green pepper, red pepper, pineapple, and tomato in hoisin and oyster sauce."
            />
            </div>
        </section>
        <section>
            <div class="section-title">Beef</div>
            <div class="foodlist">
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="BEEF w/ SAUTEED MUSHROOMS"
                :prices="[12.85]"
                desc = "Stir-fried beef with mushrooms in salty black bean sauce"
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="BEEF & BROCCOLI"
                :prices="[12.85]"
                desc = "Stir-fried beef with broccoli in salty black bean sauce"
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="BASIL BEEF"
                :prices="[11.95]"
                desc = "Stir-fried beef with garlic, onions, green and red peppers"
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="GREEN CURRY BEEF"
                :prices="[12.85]"
                desc = "Beef in a green curry, basil, coconut milk and vegetables"
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="RED CURRY BEEF"
                :prices="[12.85]"
                desc = "Beef in a red curry sauce, coconut milk, vegetables."
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="BEEF w/ BLACK PEPPER SAUCE"
                :prices="[13.85]"
                desc = "Stir-fried beef with garlic and black pepper sauce and onions."
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="CHILLI LEMONGRASS BEEF"
                :prices="[12.85]"
                desc = "Stir-fried beef with lemongrass and chilli sauce"
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="THAI EGGPLANT BEEF"
                :prices="[12.85]"
                desc = "Stir-Fried Beef with eggplant and onion and basil"
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="VEGETABLES w/ BEEF"
                :prices="[11.95]"
                desc = "Beef served with stir-fried mixed vegetables"
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="BEEF, TOMATO, AND PINEAPPLE"
                :prices="[12.85]"
                desc = "Onion, Green pepper, red pepper, pineapple, and tomato in hoisin and oyster sauce"
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="MAPO TOFU w/ BEEF"
                :prices="[11.95]"
                desc = "Beef & tofu stir fried with chilli and oyster sauce."
            />
            </div>
        </section>
        <section>
            <div class="section-title">Fried Rice</div>
            <div class="foodlist">
                
            
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="QUARTER CHICKEN LEG DINNER"
                :prices="[12.85]"
                desc = "Delicious fried chicken leg served on fried rice, coleslaw, and sweet & sour sauce."
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="EGG FRIED RICE"
                :prices="[9.07]"
                desc = "Fried rice served with extra egg."
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="FRIED RICE"
                :meats="['veggie', 'chicken', 'beef', 'shrimp']"
                :prices="[11.95, 11.95, 11.95, 12.85]"
                desc = "Regular fried rice served with your choice of meats."
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="BASIL FRIED RICE"
                :meats="['veggie', 'chicken', 'beef', 'shrimp']"
                :prices="[12.85, 12.85, 12.85, 13.85]"
                desc = "Stir-fried spicy rice with onions and basil leaves"
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="STIR-FRIED VERMICELLI"
                :meats="['veggie', 'chicken', 'beef', 'shrimp']"
                :prices="[11.95, 11.95, 11.95, 13.85]"
                desc = "Vermicelli noodle with green and red peppers, onions, bean sprout in garlic sauce."
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="CURRY FRIED RICE"
                :prices="[14.60]"
                desc = "Stir-fried rice with yellow curry sauce served with your choice of meats."
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="MARTINO FRIED RICE"
                :prices="[12.85]"
                desc = "Chicken, Black Forest Ham with specialty sauce."
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="BACON FRIED RICE"
                :prices="[12.85]"
                desc = "Fried rice served with delicious bacon"
            />
            <FoodItem
                picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                dishName="MUSHROOM FRIED RICE"
                :prices="[11.95]"
                desc = "Fried rice served with Mushrooms"
            />
            </div>
            
        </section>
       

        
    </div>
</template>
<script>
    import Header from './Header.vue'
    import FoodItem from './food/FoodItem.vue';
    export default {
        components:{
            Header, 
            FoodItem,
        }
    }
</script>
<style scoped>
    .banner{
        width: 100vw;
        min-height: 150px;
    }
    .banner-background{
        background: url(../assets/img/banner.jpg);
        background-size: cover;
        width: 100vw;
        height: 200px;
    }
    .class{
        background-color: black;
    }
    section{
    
     margin-bottom: 100px; 
     width: 100%;
       
    }
    .section-title{
        font-size: 48px;
        margin-bottom: 25px;
        font-weight: 600;
    }
    .foodlist{
        
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr) ) ;
        gap: 30px;
        max-width: 1300px; 
        margin:auto;
    }
    
    
</style>