'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import Link from 'next/link'
import { Globe, ShoppingCart } from 'lucide-react'

const languages = {
  'zh-CN': '简体中文',
  'zh-TW': '繁體中文',
  'en': 'English',
  'fr': 'Français'
}

const categories = {
  'zh-CN': ['猫砂', '猫粮', '冻干'],
  'zh-TW': ['貓砂', '貓糧', '凍乾'],
  'en': ['Cat Litter', 'Cat Food', 'Freeze-Dried Treats'],
  'fr': ['Litière pour Chat', 'Nourriture pour Chat', 'Friandises Lyophilisées']
}

const translations = {
  'zh-CN': {
    title: "猫的感觉",
    welcome: "欢迎来到猫的感觉在线宠物商店！",
    categories: "产品类别"
  },
  'zh-TW': {
    title: "貓的感覺",
    welcome: "歡迎來到貓的感覺線上寵物商店！",
    categories: "產品類別"
  },
  'en': {
    title: "Cat's Sense",
    welcome: "Welcome to Cat's Sense Online Pet Shop!",
    categories: "Product Categories"
  },
  'fr': {
    title: "Le Sens du Chat",
    welcome: "Bienvenue à la Boutique en Ligne Le Sens du Chat !",
    categories: "Catégories de Produits"
  }
}

export default function Home() {
  const [lang, setLang] = useState('en')

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">{translations[lang].title}</h1>
          <div className="flex items-center space-x-4">
            <Select value={lang} onValueChange={setLang}>
              <SelectTrigger className="w-[180px]">
                <Globe className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(languages).map(([code, name]) => (
                  <SelectItem key={code} value={code}>
                    {name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <ShoppingCart className="h-4 w-4" />
              <span className="sr-only">Cart</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">{translations[lang].welcome}</h2>
        <section>
          <h3 className="text-xl font-semibold text-gray-600 mb-4">{translations[lang].categories}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories[lang].map((category, index) => (
              <Link 
                key={index} 
                href={`/category/${index}`}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300"
              >
                <h4 className="text-lg font-medium text-gray-800">{category}</h4>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}