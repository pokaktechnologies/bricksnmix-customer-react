import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import NearestSuppliers from "./NearestSupplier";
import Categories from "./Categories";
import TrendingBrands from "./TrendingBrands";
import SpecialOffers from "./TrendingProduct";
import EarnReward from "./EarnReward";
import  TrendingProducts from "./TrendingPorducts";
import LandscapeProducts from "./LandscapeProduct";
import  GroupComponent from "./GroupComponent";
import Fastmoving from "./Fastmovingitems";
import Hirepack from "./Hirepack";
import CardBefore from "./Cardbeforefooter";
import Footer from "./Footer";
export default function Home(){
    return(
        <div>
      <Header/>
      <Carousel/>
      <br/><br/><br/><br/>
      <hr/>
      <NearestSuppliers/>
      
      <Categories/>
     
     <TrendingBrands/>
     
     <SpecialOffers/>
     
     
     <EarnReward/>
    
    < TrendingProducts/>
    <LandscapeProducts/>
    <GroupComponent/>

    <Fastmoving/>
    <Hirepack/>
    <CardBefore/>
    <Footer/>

            </div>
    )
}