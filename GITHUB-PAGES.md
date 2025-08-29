# 🚀 Como Publicar a Pizzaria do Macaco no GitHub Pages

## 📋 Passo a Passo Completo

### 1. Criar Conta no GitHub
- Acesse [github.com](https://github.com)
- Clique em "Sign up" e crie sua conta
- Confirme seu email

### 2. Criar Novo Repositório
- Clique no botão "+" no canto superior direito
- Selecione "New repository"
- Nome: `pizzaria-do-macaco` (ou o nome que preferir)
- Descrição: "Site romântico interativo da Pizzaria do Macaco com surpresas especiais"
- **IMPORTANTE**: Marque como "Public"
- Clique em "Create repository"

### 3. Fazer Upload dos Arquivos
- No seu repositório vazio, clique em "uploading an existing file"
- Arraste todos os arquivos do projeto:
  - `index.html` - **Página principal com as surpresas**
  - `style.css` - **Estilos e animações**
  - `script.js` - **Lógica do jogo**
  - `basepizza.jpg` - **Imagem da pizza**
  - `coracao.jpg` - **Ingrediente coração**
  - `estrela.png` - **Ingrediente estrela**
  - `cereja.png` - **Ingrediente cereja**
  - `README.md` - **Instruções**
  - `GITHUB-PAGES.md` - **Este arquivo**
- Clique em "Commit changes"

### 4. Ativar GitHub Pages
- No seu repositório, clique na aba **Settings**
- No menu lateral esquerdo, clique em **Pages**
- Em **Source**, selecione "Deploy from a branch"
- Em **Branch**, selecione "main" e clique em "Save"
- Aguarde alguns minutos para o deploy

### 5. Acessar seu Site
- Seu site estará disponível em:
  `https://SEU-USUARIO.github.io/pizzaria-do-macaco`
- Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub

## 🎁 **Sobre as Surpresas Especiais**

Este site tem **duas surpresas românticas** preparadas especialmente para Yasmim:

### 👀 **Mensagem Misteriosa**
- Aparece no canto inferior direito da tela
- Clique nela para ver uma surpresa no console do navegador
- Mostra uma mensagem romântica personalizada

### 🔍 **Mensagem Escondida no Código**
- Escondida nos comentários HTML do `index.html`
- Fácil de encontrar: pressione F12 ou clique com o botão direito > Inspecionar
- Uma declaração especial preparada com muito carinho

**💡 Dica:** Quando Yasmim abrir o site, ela vai ver a mensagem misteriosa piscando no canto. Ao clicar nela, será direcionada para descobrir a mensagem especial!

## 🔧 Personalizações Antes de Publicar

### Atualizar o Link do Google Forms
No arquivo `index.html`, substitua:
```html
<a href="https://docs.google.com/forms/d/e/SEU_LINK_AQUI/viewform?embedded=true">
```
Pelo link real do seu formulário.

### Personalizar Mensagens
Edite as mensagens no arquivo `index.html`:
```html
<div class="ingredient" data-message="SUA MENSAGEM PERSONALIZADA AQUI">
```

### Adicionar Mais Ingredientes
Para adicionar mais ingredientes, copie este bloco:
```html
<div class="ingredient" id="ingrediente4" data-message="Nova mensagem romântica">
    <img src="URL_DA_IMAGEM" alt="Descrição">
</div>
```

## 📱 Testando no Celular

1. **Abra o site no celular** usando o link do GitHub Pages
2. **Teste o arrastar e soltar** - deve funcionar perfeitamente
3. **Verifique as animações** - devem ser suaves
4. **Teste o controle de música** - deve funcionar bem

## 🌟 Recursos Adicionados

- ✅ **Animações especiais** para ingredientes
- ✅ **Música de fundo** com controle
- ✅ **Efeito de confete** quando completa
- ✅ **Cursor personalizado** para ingredientes
- ✅ **Design responsivo** para mobile
- ✅ **Efeitos visuais** melhorados

## 🎯 Dicas Finais

1. **Teste tudo** antes de enviar para ela
2. **Personalize as mensagens** com coisas específicas de vocês
3. **Use o link do GitHub Pages** - é gratuito e confiável
4. **Compartilhe o link** diretamente com ela

## 🔗 Links Úteis

- [GitHub](https://github.com) - Para criar o repositório
- [GitHub Pages](https://pages.github.com) - Documentação oficial
- [Google Forms](https://forms.google.com) - Para criar o formulário de resposta

---

**Agora é só publicar e surpreender a Yasmim com esse presente digital incrível! 🍕❤️**
