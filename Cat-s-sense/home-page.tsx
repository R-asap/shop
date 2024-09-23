import { useState } from 'react'
import Link from 'next/link'
import { Globe, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const languages = [
  { code: 'zh-CN', name: '简体中文' },
  { code: 'zh-TW', name: '繁體中文' },
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
]

const categories = [
  { key: 'litter', zh: '猫砂', en: 'Cat Litter', fr: 'Litière pour chat' },
  { key: 'food', zh: '猫粮', en: 'Cat Food', fr: 'Nourriture pour chat' },
  { key: 'treats', zh: '冻干', en: 'Freeze-Dried Treats', fr: 'Friandises lyophilisées' },
]

export default function HomePage() {
  const [lang, setLang] = useState('zh-CN')

  const t = (key: string) => {
    switch (lang) {
      case 'zh-CN':
      case 'zh-TW':
        return categories.find(c => c.key === key)?.zh || key
      case 'en':
        return categories.find(c => c.key === key)?.en || key
      case 'fr':
        return categories.find(c => c.key === key)?.fr || key
      default:
        return key
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Cat's Sense</h1>
          <nav className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                  <span className="sr-only">Change language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((l) => (
                  <DropdownMenuItem key={l.code} onClick={() => setLang(l.code)}>
                    {l.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">
          {lang === 'zh-CN' && '欢迎来到 Cat's Sense'}
          {lang === 'zh-TW' && '歡迎來到 Cat's Sense'}
          {lang === 'en' && 'Welcome to Cat's Sense'}
          {lang === 'fr' && 'Bienvenue chez Cat's Sense'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.key} 
              href={`/category/${category.key}`}
              className="bg-card text-card-foreground rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{t(category.key)}</h3>
              <p className="text-muted-foreground">
                {lang === 'zh-CN' && '查看我们的'}
                {lang === 'zh-TW' && '查看我們的'}
                {lang === 'en' && 'Check out our'}
                {lang === 'fr' && 'Découvrez nos'} {t(category.key)}
              </p>
            </Link>
          ))}
        </div>
      </main>
      <footer className="bg-muted text-muted-foreground mt-8">
        <div className="container mx-auto px-4 py-6 text-center">
          &copy; 2023 Cat's Sense. 
          {lang === 'zh-CN' && '保留所有权利。'}
          {lang === 'zh-TW' && '保留所有權利。'}
          {lang === 'en' && 'All rights reserved.'}
          {lang === 'fr' && 'Tous droits réservés.'}
        </div>
      </footer>
    </div>
  )
}