# ✅ Checklist de Personalização do Portfólio

Use este checklist para personalizar seu portfólio em menos de 1 hora!

---

## 📝 Informações Pessoais

### Hero Section (`src/components/Hero/index.tsx`)

- [ ] **Nome:** Linha ~62
  ```typescript
  <span className="gradient-text">SEU NOME AQUI</span>
  ```

- [ ] **Título/Cargo:** Linha ~64
  ```typescript
  <span className="text-white">Seu Cargo Aqui</span>
  ```

- [ ] **Tecnologias Principais:** Linha ~70
  ```typescript
  <ColourfulText text={"Tech1 • Tech2 • Tech3"} />
  ```

- [ ] **Descrição Profissional:** Linha ~82-90
  ```typescript
  Sua descrição completa aqui...
  ```

- [ ] **Foto de Perfil:** Linha ~40
  - Adicione sua foto em `/public/sua-foto.jpg`
  - Atualize o src: `src="/sua-foto.jpg"`

---

## 📊 Estatísticas (`src/components/Stats/index.tsx`)

- [ ] **Projetos Entregues:** Linha ~55
  ```typescript
  value: 15, // Altere para seu número
  ```

- [ ] **Linhas de Código:** Linha ~61
  ```typescript
  value: 50000, // Altere para seu número
  ```

- [ ] **Anos de Experiência:** Linha ~67
  ```typescript
  value: 3, // Altere para seu número
  ```

- [ ] **Xícaras de Café:** Linha ~73
  ```typescript
  value: 999, // Personalize! 😄
  ```

---

## 💼 Serviços (`src/components/Services/index.tsx`)

- [ ] **Revisar lista de serviços:** Linha ~22-59
  - Adicione/remova serviços conforme seu trabalho
  - Personalize títulos e ícones
  - Ajuste gradientes

- [ ] **"O que você recebe":** Linha ~61-92
  - Atualize promessas e entregas
  - Personalize itens conforme sua metodologia

---

## 💻 Tecnologias (`src/components/Skills/index.tsx`)

- [ ] **Lista de Skills:** Linha ~22-69
  ```typescript
  const skills = [
    {
      name: "Nome da Tech",
      icon: SiReact, // Importar: import { SiReact } from 'react-icons/si'
      color: "from-cyan-400 to-blue-500",
      description: "Descrição",
    },
    // Adicione suas techs aqui
  ];
  ```

**Skills Sugeridas:**
- [ ] React
- [ ] Next.js
- [ ] TypeScript
- [ ] Tailwind CSS
- [ ] Node.js
- [ ] Git
- [ ] Figma
- [ ] Seu banco de dados preferido

---

## 🚀 Projetos (`src/components/Projects/index.tsx`)

### Para cada projeto, preencha:

#### Projeto 1:
- [ ] **Título:** Linha ~22
- [ ] **Website:** Linha ~23
- [ ] **Cover (imagem):** Linha ~24-25
  - Use screenshot do projeto
  - Recomendado: 1200x600px
- [ ] **Descrição:** Linha ~26-27
- [ ] **O que você fez:** Linha ~28-31
- [ ] **Impacto/Resultados:** Linha ~32-36
- [ ] **Stack utilizada:** Linha ~37
- [ ] **Ano:** Linha ~38

#### Projeto 2:
- [ ] Repetir itens acima (Linha ~40-57)

#### Projeto 3:
- [ ] Repetir itens acima (Linha ~58-68)

### Adicionar mais projetos:
```typescript
// Copie e cole este template após o último projeto:
{
  title: "Nome do Projeto",
  website: "https://seusite.com",
  cover: "/caminho/para/imagem.jpg",
  description: "Descrição em 1-2 linhas",
  whatIDid: [
    "Funcionalidade 1",
    "Funcionalidade 2",
  ],
  impact: [
    "Resultado 1",
    "Resultado 2",
  ],
  stack: ["React", "Next.js", "TypeScript"],
  year: "2025",
},
```

---

## 📧 Contato (`src/components/Contact/index.tsx`)

- [ ] **Email:** Linha ~25
  ```typescript
  <ContactPinCard type="mail" handle="seu-email@email.com" />
  ```

- [ ] **Instagram:** Linha ~33
  ```typescript
  <ContactPinCard type="instagram" handle="seu_usuario" />
  ```

- [ ] **WhatsApp:** Linha ~41
  ```typescript
  <ContactPinCard type="whatsApp" handle="5511999999999" />
  // Formato: 55 (Brasil) + DDD + Número
  ```

---

## 👣 Footer (`src/components/Footer/index.tsx`)

- [ ] **Nome no Copyright:** Linha ~20
  ```typescript
  © {new Date().getFullYear()} <span>SEU NOME</span>
  ```

- [ ] **Badges de Tech:** Linha ~24-37
  - Personalize ou mantenha as principais

---

## 🔍 SEO (`src/app/layout.tsx`)

- [ ] **Title:** Linha ~33
  ```typescript
  title: "Seu Nome - Desenvolvedor Front-end | Tech Stack"
  ```

- [ ] **Description:** Linha ~34
  ```typescript
  description: "Sua descrição otimizada para SEO"
  ```

- [ ] **Keywords:** Linha ~35
  ```typescript
  keywords: ["suas", "palavras", "chave"]
  ```

- [ ] **Idioma:** Linha ~49
  ```typescript
  <html lang="pt-BR"> // ou "en" para inglês
  ```

---

## 🎨 Personalização Visual (Opcional)

### Cores (`src/app/globals.css`)

- [ ] **Cor Primária (Roxo):** Linha ~17
  ```css
  --primary: #8b5cf6; /* Sua cor aqui */
  ```

- [ ] **Cor Secundária (Rosa):** Linha ~21
  ```css
  --secondary: #ec4899; /* Sua cor aqui */
  ```

- [ ] **Cor de Destaque (Ciano):** Linha ~31
  ```css
  --accent: #06b6d4; /* Sua cor aqui */
  ```

---

## 📸 Imagens

### Adicione em `/public/`:

- [ ] **Foto de perfil:** `home.png` ou `seu-nome.jpg`
- [ ] **Screenshots de projetos:** 
  - `projeto1.jpg`
  - `projeto2.jpg`
  - `projeto3.jpg`

### Recomendações:
- Formato: JPEG ou WebP
- Qualidade: Otimizada (< 500KB por imagem)
- Dimensões:
  - Foto perfil: 400x500px (portrait)
  - Projetos: 1200x600px (landscape)

---

## 🧪 Testes

Após personalizar, teste:

- [ ] **Mobile:**
  - [ ] iPhone (375px)
  - [ ] Android (414px)
  
- [ ] **Tablet:**
  - [ ] iPad (768px)
  - [ ] iPad Pro (1024px)
  
- [ ] **Desktop:**
  - [ ] Laptop (1440px)
  - [ ] Monitor (1920px)

### Checklist de Teste:

- [ ] Todas as imagens carregam
- [ ] Links funcionam
- [ ] Animações suaves
- [ ] Sem erros no console
- [ ] Texto legível
- [ ] Cores harmoniosas
- [ ] Responsivo em todos os tamanhos

---

## 🚀 Deploy

- [ ] **GitHub:**
  ```bash
  git add .
  git commit -m "Personalização do portfólio"
  git push origin main
  ```

- [ ] **Vercel:**
  1. Acesse vercel.com
  2. Conecte seu repositório GitHub
  3. Deploy automático!
  4. Configure domínio customizado (opcional)

- [ ] **Analytics (Opcional):**
  - [ ] Google Analytics
  - [ ] Vercel Analytics
  - [ ] Outros

---

## ✅ Checklist Final

Antes de considerar finalizado:

- [ ] ✏️ Todas as informações pessoais atualizadas
- [ ] 📊 Estatísticas refletem sua realidade
- [ ] 💼 Serviços condizem com seu trabalho
- [ ] 💻 Skills representam suas tecnologias
- [ ] 🚀 Mínimo 3 projetos reais adicionados
- [ ] 📧 Contatos corretos e funcionais
- [ ] 🔍 SEO otimizado
- [ ] 📱 Testado em mobile
- [ ] 💻 Testado em desktop
- [ ] 🎨 Cores personalizadas (se desejado)
- [ ] 📸 Imagens otimizadas
- [ ] 🚀 Deploy realizado
- [ ] 🌐 Domínio configurado (se aplicável)
- [ ] 📊 Analytics configurado (se desejado)

---

## ⏱️ Tempo Estimado

- **Personalização Básica:** 30-45 min
- **Adicionar Projetos:** 30-60 min
- **Ajustes Visuais:** 15-30 min
- **Testes:** 15-30 min
- **Deploy:** 10-15 min

**Total: 1h30 - 3h**

---

## 💡 Dicas Finais

1. **Seja Autêntico:** Use seus projetos reais
2. **Qualidade > Quantidade:** 3-5 projetos excelentes > 10 medianos
3. **Atualize Sempre:** Mantenha seu portfólio atual
4. **Performance:** Otimize imagens antes de subir
5. **Teste Muito:** Em diferentes dispositivos e navegadores
6. **Feedback:** Peça opinião de colegas
7. **Analytics:** Acompanhe métricas após deploy

---

## 🆘 Precisa de Ajuda?

Consulte:
- 📖 **GUIA_RAPIDO.md** - Instruções detalhadas
- 🔧 **MODERNIZACOES.md** - Detalhes técnicos
- 📊 **RESUMO_EXECUTIVO.md** - Visão geral
- 📚 [Next.js Docs](https://nextjs.org/docs)
- 🎨 [Tailwind Docs](https://tailwindcss.com)

---

**🎉 Boa sorte com seu portfólio modernizado!**

Agora é só personalizar e impressionar! 🚀
