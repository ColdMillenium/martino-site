<template>
    <div>
        <div class="banner-background">
            
        </div>
        <div class="filters">
           
            <a class="filter-btn" href="#specialty-pizza">Specialty Pizza</a>
            <a class="filter-btn" href="#create-pizza">Create your own Pizza</a>
            <a class="filter-btn" href="#wings">Wings</a>
            <a class="filter-btn" href="#pasta">Pasta</a>
            <a class="filter-btn" href="#vegetables">vegetables</a>
            <a class="filter-btn" href="#noodles">noodles</a>
            <a class="filter-btn" href="#verm">vermecelli</a>
            <a class="filter-btn" href="#shrimp">shrimp</a>
            <a class="filter-btn" href="#chicken">chicken</a>
            <a class="filter-btn" href="#beef">beef</a>
            <a class="filter-btn" href="#fried-rice">fried rice</a>
           

        </div>
    
        <section id="specialty-pizza">
            <div class="section-title">~ Specialty Pizza ~</div>
            <div class="pizza-guide-container">
                <div class="pizza-guide">
                    <div class="leaf-legend">
                         <img class="pizza-guide-leaf" src="../assets/img/specialPizza/vegetarianLeaf.png" alt="leaf symbolizing the meal is vegetarian">
                        <p>= Vegetarian</p>
                    </div>
                    <div class="pizza-options">
                        <div class="pizza-size-desc">
                            <div class="size">  {{size}} Pizza</div>
                            <p class="inches">{{inches}}</p>
                            <p class="slices">{{slices}} slices</p>
                        </div>
                        <div class="pizza-sizes">
                            <div  
                                v-for="(option, index) in options" 
                                v-on:click="updateSelected(index)" 
                                :class="btnClass(index)"
                                :key="option"
                            >
                                {{option.size}}
                            </div>
                        </div>
                        
                    </div>
                    
                    
                    
                   
                </div>
            </div>
           
            <div class="foodlist">
                <FoodItem
                    picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                    dishName="CLASSIC MARGHERITA"
                    :meats="['S', 'M', 'L', 'XL', 'F', 'P']"
                    veg="true"
                    :prices="['15.20', '20.20', '23.20', '28.60', '33.00', '37.50']"
                    desc = "Fresh Tomato, Basil, Parmesan Cheese, Spices, Ricotta Cheese."
                />
                <FoodItem
                    picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                    dishName="NAPLES GARLIC MARGHERITA"
                    :meats="['S', 'M', 'L', 'XL', 'F', 'P']"
                    veg="true"
                    :prices="['12.10', '16.10', '18.70', '23.30', '26.90', '30.80']"
                    desc = "Double Cheese, Spices, Garlic, Basil."
                />
                <FoodItem
                    picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                    dishName="HOUSE SPECIAL"
                    :meats="['S', 'M', 'L', 'XL', 'F', 'P']"
                    :prices="['15.20', '20.20', '23.20', '28.60', '33.00', '37.50']"
                    desc = "Chicken, Bacon, Red Pepper, Sun Dried Tomatoes, Feta."
                />
                <FoodItem
                    picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                    dishName="WHITE PIZZA"
                    :meats="['S', 'M', 'L', 'XL', 'F', 'P']"
                    veg="true"
                    :prices="['15.20', '20.20', '23.20', '28.60', '33.00', '37.50']"
                    desc = "Olive Oil, Spices, Spinach, Tomato, Roasted Red Peppers, Garlic, Ricotta, Parmesan."
                />
                <FoodItem
                    picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                    dishName="SUPREME"
                    :meats="['S', 'M', 'L', 'XL', 'F', 'P']"
                    :prices="['15.20', '20.20', '23.20', '28.60', '33.00', '37.50']"
                    desc = "Fresh Tomato, Basil, Parmesan Cheese, Spices, Ricotta Cheese."
                />
                <FoodItem
                    picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                    dishName="BUFFALO"
                    :meats="['S', 'M', 'L', 'XL', 'F', 'P']"
                    :prices="['13.65', '18.15', '20.95', '25.95', '29.95', '34.15']"
                    desc = "Mushrooms, Onions, Chicken, Gorgonzola."
                />
                <FoodItem
                    picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                    dishName="PRIMAVERA"
                    :meats="['S', 'M', 'L', 'XL', 'F', 'P']"
                    veg="true"
                    :prices="['15.20', '20.20', '23.20', '28.60', '33.00', '37.50']"
                    desc = "Spinach, Red Peppers, Eggplant, Zucchini, Mushrooms."
                />
                <FoodItem
                    picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                    dishName="DIAVOLA"
                    :meats="['S', 'M', 'L', 'XL', 'F', 'P']"
                    :prices="['13.65', '18.15', '20.95', '25.95', '29.95', '34.15']"
                    desc = "Sausage, Onions, Hot Peppers, Mushrooms."
                />
                <FoodItem
                    picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                    dishName="MEDITERRANEAN"
                    :meats="['S', 'M', 'L', 'XL', 'F', 'P']"
                    veg="true"
                    :prices="['16.75', '22.25', '25.45', '31.25', '36.05', '40.85']"
                    desc = "Spinach, Feta, Tomatoes, Onions, Black Olives, Parmesan."
                />
                <FoodItem
                    picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                    dishName="BACON CHEESE BURGER PIZZA"
                    :meats="['S', 'M', 'L', 'XL', 'F', 'P']"
                    :prices="['13.65', '18.15', '20.95', '25.95', '29.95', '34.15']"
                    desc = "Ground Beef, Onions, Bacon, Cheddar."
                />
                <FoodItem
                    picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                    dishName="GREEK"
                    :meats="['S', 'M', 'L', 'XL', 'F', 'P']"
                    veg="true"
                    :prices="['13.65', '18.15', '20.95', '25.95', '29.95', '34.15']"
                    desc = "Feta, Black Olives, Tomatoes, Onions."
                />
                <FoodItem
                    picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                    dishName="BBQ SAUCE PIZZA"
                    :meats="['S', 'M', 'L', 'XL', 'F', 'P']"
                    :prices="['15.20', '20.20', '23.20', '28.60', '33.00', '37.50']"
                    desc = "Fresh Tomato, Basil, Parmesan Cheese, Spices, Ricotta Cheese."
                />
                <FoodItem
                    picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                    dishName="SPINACH PIZZA"
                    :meats="['S', 'M', 'L', 'XL', 'F', 'P']"
                    veg="true"
                    :prices="['15.20', '20.20', '23.20', '28.60', '33.00', '37.50']"
                    desc = "Spinach, Goat Cheese, Cashew Nuts, Onions, Roasted Red Peppers."
                />
                <FoodItem
                    picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                    dishName="CALIFORNIA"
                    :meats="['S', 'M', 'L', 'XL', 'F', 'P']"
                    :prices="['15.20', '20.20', '23.20', '28.60', '33.00', '37.50']"
                    desc = "Pesto Sauce, Sausage, Onions, Roasted Red Peppers, Oregano, Parmesan."
                />
                <FoodItem
                    picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                    dishName="CHICKEN PESTO"
                    :meats="['S', 'M', 'L', 'XL', 'F', 'P']"
                    :prices="['15.20', '20.20', '23.20', '28.60', '33.00', '37.50']"
                    desc = "Chicken, Artichoke, Pesto, Roasted Red Peppers, Roasted Garlic, Parmesan."
                />
                <FoodItem
                    picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                    dishName="COMBINATION"
                    :meats="['S', 'M', 'L', 'XL', 'F', 'P']"
                    veg="true"
                    :prices="['16.75', '22.25', '25.45', '31.25', '36.05', '40.85']"
                    desc = "Pesto, Tomato sauce, Onions, Tomatoes, Artichoke, Ricotta, Black Olives"
                />
                <FoodItem
                    picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                    dishName="SUPER MEAT"
                    :meats="['S', 'M', 'L', 'XL', 'F', 'P']"
                    :prices="['15.20', '20.20', '23.20', '28.60', '33.00', '37.50']"
                    desc = "Pepperoni, Bacon, Ground Beef, Sausages, Ham."
                />
                <FoodItem
                    picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                    dishName="SUPER VEGGIE"
                    :meats="['S', 'M', 'L', 'XL', 'F', 'P']"
                    veg="true"
                    :prices="['15.20', '20.20', '23.20', '28.60', '33.00', '37.50']"
                    desc = "Green Peppers, Tomatoes, Mushrooms, Green Olives, Onions."
                />
                <FoodItem
                    picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                    dishName="CLASSIC MARGHERITA"
                    :meats="['S', 'M', 'L', 'XL', 'F', 'P']"
                    :prices="['15.20', '20.20', '23.20', '28.60', '33.00', '37.50']"
                    desc = "Fresh Tomato, Basil, Parmesan Cheese, Spices, Ricotta Cheese."
                />
                <FoodItem
                    picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                    dishName="SUPER DELUXE"
                    :meats="['S', 'M', 'L', 'XL', 'F', 'P']"
                    :prices="['16.75', '22.25', '25.45', '31.25', '36.05', '40.85']"
                    desc = "Pepperoni, Mushrooms, Tomato, Green Peppers, Onions, Bacon."
                />
                <FoodItem
                    picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                    dishName="SOPPRESSATA PIZZA"
                    :meats="['S', 'M', 'L', 'XL', 'F', 'P']"
                    :prices="['16.75', '22.25', '25.45', '31.25', '36.05', '40.85']"
                    desc = "Soppressata, Sautéed Onions, Tomatoes, Parmesan, Roasted garlic, Pesto Sauce."
                />
                <FoodItem
                    picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                    dishName="CLASSIC MARGHERITA"
                    :meats="['S', 'M', 'L', 'XL', 'F', 'P']"
                    :prices="['15.20', '20.20', '23.20', '28.60', '33.00', '37.50']"
                    desc = "Fresh Tomato, Basil, Parmesan Cheese, Spices, Ricotta Cheese."
                />
                <FoodItem
                    picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                    dishName="BACON CLUB"
                    :meats="['S', 'M', 'L', 'XL', 'F', 'P']"
                    :prices="['15.20', '20.20', '23.20', '28.60', '33.00', '37.50']"
                    desc = "Double Pepperoni, Double Bacon, Mushrooms."
                />
                <FoodItem
                    picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                    dishName="PIZZA QUATRO STAGIONI"
                    :meats="['S', 'M', 'L', 'XL', 'F', 'P']"
                    veg="true"
                    :prices="['15.20', '20.20', '23.20', '28.60', '33.00', '37.50']"
                    desc = "Artichokes, Tomatoes, Soppressata, Prosciutto, Mushrooms."
                />
                <FoodItem
                    picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                    dishName="GENERAL TAO’S PIZZA"
                    :meats="['S', 'M', 'L', 'XL', 'F', 'P']"
                    :prices="['15.20', '20.20', '23.20', '28.60', '33.00', '37.50']"
                    desc = "Sweet and Sour Chicken, Onion, Green & Red Peppers."
                />
                <FoodItem
                    picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                    dishName="DUPONT STRIP PIZZA"
                    :meats="['S', 'M', 'L', 'XL', 'F', 'P']"
                    :prices="['12.10', '16.10', '18.70', '23.30', '26.90', '30.80']"
                    desc = "Pepperoni, Mushroom, Green Olives."
                />
                <FoodItem
                    picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                    dishName="MARTINO’S TROPICAL PIZZA"
                    :meats="['S', 'M', 'L', 'XL', 'F', 'P']"
                    :prices="['12.10', '16.10', '18.70', '23.30', '26.90', '30.80']"
                    desc = "Pepperoni, Bacon, Pineapple."
                />
                <FoodItem
                    picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                    dishName="ALFREDO PIZZA"
                    :meats="['S', 'M', 'L', 'XL', 'F', 'P']"
                    :prices="['18.30', '24.30', '27.70', '33.90', '39.10', '44.20']"
                    desc = "Cream, Parmesan, Chicken, Bacon, Mushroom, Onion, Spinach"
                />
                <FoodItem
                    picUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563"
                    dishName="RED CURRY CHICKEN PIZZA"
                    :meats="['S', 'M', 'L', 'XL', 'F', 'P']"
                    :prices="['16.75', '22.25', '25.45', '31.25', '36.05', '40.85']"
                    desc = "Red Curry Sauce, Chicken, Red & Green Peppers, Onion, Pineapple, Thai Basil, Lime Leaf."
                />
            
            </div>
        </section>
        <section id="create-pizza">
            <div class="section-title">Create your own Pizza</div>
            <div class="create-pizza-container">
                <div class="create-pizza">
                    <div class="pizza-pricing">
                        <div class="subtitle">Pizza sizes</div>
                        <div  
                                v-for="(option, index) in options" 
                                v-on:click="updateSelected(index)" 
                                class="pizza-size-desc"
                                :key="option"
                            >
                                <div class="create-pizza-size"> <strong>{{option.size}}</strong></div>
                               <div class="create-pizza-inches">  {{option.inches}}</div>
                               <div class="create-pizza-slices">{{option.slices}} Slices</div>
                              
                        
                         </div>
                         <div class="subtitle">Basic Tomato Sauce</div>
                         <div  
                                v-for="(tomatoSaucePrice, index) in tomatoSaucePrices" 
                                :key="index"
                                class="extra-price"
                            >
                               ${{tomatoSaucePrice}}
                         </div>
                         <div class="subtitle">Additional Toppings</div>
                         <div  
                                v-for="(toppingPrice, index) in toppingPrices" 
                                :key="index"
                                class="extra-price"
                            >
                               ${{toppingPrice}}
                         </div>

                    </div>
                    <div class="calzone">
                        <img class="calzone-pic" src="../assets/img/CreateYourOwn/calzone.jpg" alt="picture of delicious calzone">
                        <div class="calzone-info">
                            <div class="calzone-title">Calzone</div>
                            <div>basic ssauce & cheese</div>
                            <div class="calzone-price">$7.99</div>
                            <div>any additional toppings</div>
                            <div class="calzone-price">$1.10</div>
                        </div>
                    
                            
                      
                       
                    </div>
                    <div class="toppings">
                        <div class="toppings-title">Toppings</div>
                        <div class="toppings-list">
                            <div class="pizza-sauce">
                                <div class="toppings-subtitle">Pizza Sauce</div>
                                <p v-for="(pizzaSauce, index) in pizzaSauces" class="pizza-topping" :key="index">
                                   {{pizzaSauce}}
                                </p>
                            </div>
                            <div class="veg-toppings">
                                <div class="toppings-subtitle">Vegetables</div>
                                <p v-for="(vegTopping, index) in vegToppings" class="pizza-topping" :key="index">
                                   {{vegTopping}}
                                </p>
                            </div>
                            <div class="cheese-toppings">
                                <div class="toppings-subtitle">Cheese</div>
                                <p v-for="(cheeseTopping, index) in cheeseToppings" class="pizza-topping" :key="index">
                                   {{cheeseTopping}}
                                </p>
                            </div>
                            <div class="meat-toppings">
                                <div class="toppings-subtitle">Meat</div>
                                <p v-for="(meatTopping, index) in meatToppings" class="pizza-topping" :key="index">
                                   {{meatTopping}}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section  id="wings">
            <div class="section-title">Wings</div>
            <div class="wings-container">
                <div class="wings">
                    <div class="wings-pics">
                        <img class="wings-pic" src="../assets/img/Wings/wingsTransparent.png" alt="">
                    </div>
                    <div class="wings-sizes">
                        <div class="wings-subtitle">Sizes</div>
                        <div v-for="(wingSize, index) in wingSizes" class="wings-size" :key="index">
                            <p class="wings-lbs">{{wingSize.lbs}} LBS</p>
                            <p class="wings-info"><em>{{wingSize.info}}</em></p>
                            <p class="wings-price">${{wingSize.price}}</p>
                        </div>
                    </div>
                    <div class="wings-sauces">
                        <div class="wings-subtitle">Sauces</div>
                        <p v-for="(sauce,index) in sauces" class="sauce" :key="index">
                            {{sauce}}
                        </p>
                        
                    </div>
                </div>
            </div>
        </section>
        <section  id="pasta">
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
        <section id="vegetables">
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
        <section  id="noodles">
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
        <section  id="verm">
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
        <section id="shrimp">
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
        <section  id="chicken">
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
        <section  id="beef">
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
        <section  id="fried-rice">
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
    import FoodItem from './food/FoodItem.vue';
    var fadeInElements = [] // array holding all elements using fade-in class
    const isElemVisible = (el) =>{
                var rect = el.getBoundingClientRect();
                var elemTop = rect.top + 200 // 200 = buffer
                var elemBottom = rect.bottom
                return elemTop < window.innerHeight && elemBottom >= 0
            };
     const handleScroll = (event) =>{
                if(event || !event){ //just so it wont error because we dont use event.
                    console.log("we scrollin dawg");
                    for(var i = 0; i < fadeInElements.length; i++){
                        var elem = fadeInElements[i];
                        if(isElemVisible(elem)){
                            //grows and turns visible
                            elem.style.opacity = '1';
                            elem.style.transform = 'scale(1)';
                        }else{
                            //shrinks and aturns invisible
                            elem.style.opacity = '0';
                            elem.style.transform = 'scale(0.9)';
                        }
                    }
                }
            };
    export default {
        name: "Menu",
       
        data(){
            return{
                filters:{
                    "all": true,
                    "pasta": false,
                    "pizza": false,
                    "wings": false,
                },
                selected: 0,
                tomatoSaucePrices:[
                    "7.45",
                    "9.95",
                    "11.95",
                    "15,35",
                    "17.75",
                    "20.75",
                ],
                toppingPrices:[
                    "1.55",
                    "2.05",
                    "2.25",
                    "2.65",
                    "3.05",
                    "3.35"
                ],
                sauces:[
                    'BBQ',
                    'Medium',
                    'Hot',
                    'Honey Garlic',
                    'Spicy Honey G.',
                    'Honey BBQ',
                    'General Tao',
                    'Thai Chilli'
                ],
                pizzaSauces:[
                    "Pesto",
                    "BBQ",
                    "Garlic",
                    "Olive Oil"
                ],
                vegToppings:[
                    "Mushrooms",
                    "Green Peppers",
                    "Onions",
                    "Olives",
                    "Black Olives",
                    "Tomatoes"

                ],
                cheeseToppings:[
                    "Mozzarella",
                    "Cheddar",
                    "Feta",
                    "Goat Cheese",
                    "Gorgonzola",
                    "Ricotta"
                ],
                meatToppings:[
                    "Pepperoni",
                    "Ham",
                    "Prosciutto",
                    "Bacon",
                    "Beef",
                    "Hot Sausage",
                    "Mild Sausage",
                    "Chicken"
                ],
                wingSizes:[
                    {
                        lbs:'1',
                        info: '(10-12 Pieces)',
                        price: '9.75'
                    },
                    {
                        lbs:'2',
                        info: '(+ 5 Wings)',
                        price: '19.49'
                    },
                    {
                        lbs:'5',
                        info: '(+1lb Wings)',
                        price: '48.75'
                    }
                ],
                options: [
                        {
                            size: "Small",
                            slices: "6",
                            inches: "10''"
                        },
                        {
                            size: "Medium",
                            slices: "8",
                            inches: "12''"
                        },
                        {
                            size: "Large",
                            slices: "10",
                            inches: "14''"
                        },
                        {
                            size: "X-Large",
                            slices: "12",
                            inches: "16''"
                        },
                        {
                            size: "Family",
                            slices: "12",
                            inches: "18''"
                        },
                        {
                            size: "Party",
                            slices: "15",
                            inches: "21''"
                        },
                         

                    
                ]
               
            }
        },
         computed:{
        slices(){
            return this.options[this.selected].slices;
        },
        size(){
            return this.options[this.selected].size;
        },
        inches(){
            return this.options[this.selected].inches;
        },
    },
    methods:{
        updateSelected(index){
            this.selected = index;
        },
        btnClass(index){
            if(this.selected === index){
                return "menu-btn selected"
            }else{
                return "menu-btn"
            }
        }
    },
        mounted (){
            console.log('mounted bitch');
            fadeInElements = Array.from(document.getElementsByClassName('fade-in'));
            window.addEventListener('scroll', handleScroll)
            handleScroll();
        },
        destroyed(){
            window.removeEventListener('scroll', handleScroll)
        },
        components:{
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
    .filters{
        position: sticky;
        z-index: 999;
        top: 60px;
        background-color: rgba(231, 231, 231, 0.349);
        padding:10px;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        gap: 10px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
        

    }
    .filter-btn{
        position: static;
        padding: 5px 10px;
        background:white;
        text-decoration: none;
        border: 2.2px solid var(--highlight);
        border-radius: 1em;
        
        color:var(--highlight);
        font-family: Roboto;
        
        
    }
    .filter-btn:link:active, 
    .filter-btn:visited:active{
        font-weight: bold;
        transform: scale(1.05)
    } 
    section{
 
     padding-top: 100px; 
     width: 100%;
       
    }
    .section-title{
        font-size: 48px;
        margin-bottom: 25px;
        font-weight: 600;
        text-shadow: 0px 4px 3px rgba(75, 75, 75, 0.4),
               0px 8px 13px rgba(97, 97, 97, 0.1),
               0px 18px 23px rgba(143, 143, 143, 0.1);

    }
    .foodlist{
        
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(600px, 1fr) ) ;
        gap: 50px;
        max-width: 1300px; 
        margin:auto;
        justify-items: center;
        /* align-items: center; */
    }
    .fade-in {
        
        opacity: 0;
        transition: 0.3s all ease-out;
        transform:  scale(0.8);
    }
    /* ---------- Specialty Pizza---------- */
        .pizza-guide-container{
            background: white;
            width: 100%;
        }
        .pizza-guide{
            width: 1300px;;
            /* background: rgb(255, 255, 255); */
            background: url(../assets/img/specialPizza/Buffalo.jpg);
            opacity: 0.2;
            background-size: cover;
            margin:auto;
            color: var(--black);
            text-align: left;
            padding: 3em;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center; 
            box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
            margin-bottom: 50px;
           
        }
        .pizza-guide-leaf{
            height: 50px;
        }
        .leaf-legend{
            display: flex;
            align-items: center;
            gap: 7px;
            font-size: 32px;
        }
        .pizza-options{
            display: flex;
            flex-direction: row;
            gap: 100px;
        }
        .pizza-sizes{
            display: grid;
            grid-template-columns: 1fr 1fr ;
            gap: 5px;
          
            
        }
        .pizza-size-desc{
            display: flex;
            flex-direction: column;
            font-size: 20px;
        }
        .size{
            font-size: 32px;
        }
    
        
        .pizza-topping{
            font-weight: 300;
        }
    /* ---------- Wings---------- */
        .wings{
            display: grid;
            width: 1000;
            grid-template-columns: 1fr 1fr 1fr;
            align-items: center;
            max-width: 1300px;
            margin: auto;
        }
        .wings-pic{
            width: 100%;
        }
        .wings-subtitle{
            font-family: 'Roboto';
            font-size: 32px;
            font-weight: 600;
        }
        .sauce{
            text-decoration: none;
            font-weight: 300;
        }
        .wings-sizes{
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        .wings-lbs{
            font-weight: bold;
        }
        .wings-info{
            font-size: 14px;
        }
        .wings-price{
            font-size: 18px;
            font-weight: 300;
        }

    /* ---------- Create your own pizza---------- */
        .create-pizza-container{
            margin: auto;
            padding: 2em;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        }
        .create-pizza .subtitle{
                text-align: left;
                font-size: 32px;
                font-weight: 600;
            }
        .create-pizza-size{
            font-weight: 400;

        }
        .create-pizza-inches{
            font-size: 16px;
            font-weight: 300;
        }
        .create-pizza-slices{
            font-size: 16px;
            font-weight: 300;
        }
        .pizza-pricing{
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr 1fr;
            gap: 50px;
            align-items: center;
            justify-content: center;
            max-width: 1300px;
            margin: auto;
            
        }
        .extra-price{
            font-weight: 300;
            font-size: 18px;
        }
        .pizza-option{
            display: flex;
            flex-direction: column;
        }
        
        /* ------ Calzone ------ */
            .calzone{
                margin: 30px auto;
                display: flex;
                
                
                box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
                width: 600px;
                border-radius: 5px;
                overflow: hidden;
            }
            .calzone-pic{
                width: 40%;
            }
            .calzone-info{
                padding: 10px;
                width: 60%;
            }
            .calzone-title{
                font-weight: 600;
                font-size: 36px;
            }
            .calzone-price{
                font-size: 30px;
                font-weight: 300;
            }
        /*------- Toppings ------ */
            .topping{
                background: grey;
            }
            .toppings-list{
                display: flex;
                justify-content: center;
                max-width: 1300px;
                margin: auto;
                gap: 100px;
                margin-top: 30px;
            }
            .toppings-subtitle{
                font-size: 24px;
                font-weight: 400;
                font-family: 'Roboto';

            }
            .toppings-title{
                font-size: 32px;
                text-align: center;
                margin: 0 auto;
                font-weight: 600;
            }
            


        

    
    
</style>