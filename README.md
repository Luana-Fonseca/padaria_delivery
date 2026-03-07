# Padaria & Lanchonete - E-commerce Delivery Online

Um e-commerce profissional e completo para padaria/lanchonete com design artesanal rústico moderno, desenvolvido com React, TypeScript e TailwindCSS.

## 🎯 Características Principais

### Funcionalidades
- **Cardápio Completo**: Pães, doces, salgados, bolos e bebidas com descrições e preços
- **Carrinho de Compras**: Adicionar, remover e atualizar quantidades de produtos
- **Checkout Integrado**: Formulário de entrega com opções de delivery ou retirada
- **Rastreamento de Pedidos**: Sistema de rastreamento com timeline visual
- **Promoções e Descontos**: Combos especiais com descontos imperdíveis
- **Responsividade Total**: Design adaptado para mobile, tablet e desktop
- **Armazenamento Local**: Carrinho salvo no localStorage do navegador

### Design
- **Paleta de Cores Artesanal**: Marrom quente (#8B6F47), Creme (#F5EFE7), Laranja (#D97706)
- **Tipografia Elegante**: Playfair Display para títulos, Lato para corpo
- **Animações Suaves**: Transições naturais e fluidas em toda a interface
- **Elementos Rústicos**: Cards texturizados, divisores orgânicos, badges artesanais

## 📁 Estrutura do Projeto

```
bakery_delivery/
├── client/
│   ├── public/
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx          # Navegação principal
│   │   │   ├── Footer.tsx          # Rodapé com links
│   │   │   ├── ProductCard.tsx     # Card de produto
│   │   │   └── ErrorBoundary.tsx   # Tratamento de erros
│   │   ├── contexts/
│   │   │   ├── CartContext.tsx     # Gerenciamento do carrinho
│   │   │   └── ThemeContext.tsx    # Gerenciamento de tema
│   │   ├── lib/
│   │   │   └── products.ts         # Dados de produtos
│   │   ├── pages/
│   │   │   ├── Home.tsx            # Página inicial
│   │   │   ├── Cart.tsx            # Página do carrinho
│   │   │   ├── OrderTracking.tsx   # Rastreamento de pedidos
│   │   │   └── NotFound.tsx        # Página 404
│   │   ├── App.tsx                 # Componente raiz
│   │   ├── main.tsx                # Entrada React
│   │   └── index.css               # Estilos globais
│   └── index.html                  # HTML base
├── server/
│   └── index.ts                    # Servidor Express
├── package.json
└── README.md
```

## 🚀 Como Usar

### Instalação
```bash
cd bakery_delivery
pnpm install
```

### Desenvolvimento
```bash
pnpm dev
```
O servidor estará disponível em `http://localhost:3000`

### Build para Produção
```bash
pnpm build
```

### Preview de Produção
```bash
pnpm preview
```

## 🎨 Design System

### Cores
- **Primária**: #8B6F47 (Marrom quente)
- **Secundária**: #D97706 (Laranja queimado)
- **Background**: #FEFDF9 (Creme claro)
- **Foreground**: #2D2520 (Marrom escuro)
- **Muted**: #E8DFD5 (Bege claro)

### Tipografia
- **Display**: Playfair Display (serif elegante)
- **Body**: Lato (sans-serif legível)

### Componentes Customizados
- `.rustic-card`: Card com textura e sombra suave
- `.rustic-button`: Botão primário com hover effect
- `.rustic-button-outline`: Botão outline
- `.section-divider`: Divisor visual entre seções

## 📱 Páginas

### Home (/)
- Hero section com imagem artesanal
- Seção de benefícios
- Produtos em destaque
- Cardápio completo com filtros por categoria
- Promoções especiais
- Seção "Sobre Nós"
- Newsletter
- Contato

### Carrinho (/cart)
- Visualização de itens
- Ajuste de quantidades
- Remoção de produtos
- Resumo do pedido
- Opções de entrega/retirada
- Formulário de checkout

### Rastreamento (/rastrear)
- Busca de pedido por código
- Timeline visual do status
- Informações de entrega
- Tempo estimado

## 🛍️ Produtos Inclusos

### Pães
- Pão Francês
- Pão Integral
- Pão de Centeio
- Pão Sourdough

### Doces
- Croissant de Manteiga
- Croissant de Chocolate
- Brigadeiro Artesanal

### Salgados
- Pastel de Carne
- Pastel de Queijo
- Coxinha de Frango
- Broa de Queijo
- Esfiha de Carne

### Bolos
- Bolo de Chocolate
- Bolo de Cenoura
- Torta de Frutas

### Bebidas
- Café Expresso
- Cappuccino
- Café Latte
- Suco Natural
- Chá Quente

### Promoções
- Combo Café + Pão
- Combo Café + Doce
- Combo Salgados

## 🔧 Tecnologias

- **React 19**: Framework UI
- **TypeScript**: Tipagem estática
- **TailwindCSS 4**: Utility-first CSS
- **Wouter**: Roteamento leve
- **Lucide React**: Ícones
- **Sonner**: Notificações toast
- **React Hook Form**: Gerenciamento de formulários
- **Zod**: Validação de schemas

## 💾 Armazenamento

O carrinho é salvo automaticamente no `localStorage` do navegador, permitindo que os usuários recuperem seus itens mesmo após fechar o navegador.

## 📞 Contato

- **Telefone**: (11) 98765-4321
- **Email**: contato@padaria.com.br
- **Endereço**: Rua das Flores, 123 - São Paulo, SP

## ⏰ Horário de Funcionamento

- **Segunda a Sexta**: 6:00 - 20:00
- **Sábado e Domingo**: 7:00 - 19:00

## 📄 Licença

MIT

## 🎯 Próximas Melhorias

- Integração com sistema de pagamento (Stripe)
- Autenticação de usuários
- Histórico de pedidos
- Sistema de avaliações e comentários
- Integração com Google Maps
- Notificações por email/SMS
- Dashboard de administração
- Integração com redes sociais

---

Desenvolvido com ❤️ para sua padaria/lanchonete
