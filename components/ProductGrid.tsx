"use client"
import React, { useEffect, useState } from 'react'
import MenuTabbar from './MenuTabbar'
import { productType } from '@/constants'
import { client } from '@/sanity/lib/client'

const ProductGrid = () => {
    const [selectedTab, setSelectedTab] = useState(productType[0]?.title || "")
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
    const fetchData = async () => {
      if (!selectedTab) return; // Guard against empty selectedTab
      setLoading(true);
      try {
        const query = `*[_type == "menu" && lower(category->name) == $categoryName] {
          package,
          price,
          menuItems[] {
            main,
            description
          }
        } | order(price asc)`;
        const params = { categoryName: selectedTab.toLowerCase().replace(/\s+/g, "") };
        const data = await client.fetch(query, params);
        console.log("Fetched Data:", data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedTab]);

    return (
        <div className="mt-10 flex flex-col items-center">
            <MenuTabbar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
        </div>
    )
}

export default ProductGrid