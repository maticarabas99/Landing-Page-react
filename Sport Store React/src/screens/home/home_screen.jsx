import React from "react";
import { Header } from "../../components/header/header";
import { AboutUs } from "../../components/main/about_us/about_us";
import { CategoryWidget } from "../../components/main/categories/category_widget/category_widget";
import { ProductWidget } from "../../components/main/products/product_widget/product_widget";
import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";
import { HomeLayout } from "../../layout/home/home_layout";

export const HomeScreen = () => {
  return (
    <div>
      <Navbar />
      <HomeLayout>
        <Header />
        <AboutUs />
        <CategoryWidget />
        <ProductWidget />
      </HomeLayout>
      <Footer />
    </div>
  );
};
