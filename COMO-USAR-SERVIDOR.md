# 🚀 Como Usar o Servidor Local - Pizzaria do Amor

## ❓ **Por que usar um servidor local?**

Quando você abre um arquivo HTML diretamente no navegador (duplo clique), ele abre com o protocolo `file://` que tem limitações:
- ❌ JavaScript pode não funcionar corretamente
- ❌ Imagens podem não carregar
- ❌ CSS pode ter problemas
- ❌ Funcionalidades de arrastar e soltar podem falhar

## 🎯 **Soluções disponíveis:**

### **Opção 1: Python (Recomendado)**
- ✅ Mais simples e confiável
- ✅ Funciona em Windows, Mac e Linux
- ✅ Já vem instalado na maioria dos sistemas

### **Opção 2: Node.js**
- ✅ Alternativa se não tiver Python
- ✅ Mais rápido para arquivos grandes
- ✅ Boa para desenvolvimento web

## 🐍 **Como usar com Python:**

#### **Passo 1: Verificar se tem Python**
Abra o terminal/prompt e digite:
```bash
python --version
```
ou
```bash
python3 --version
```

#### **Passo 2: Iniciar o servidor**
**Windows:** Duplo clique em `iniciar-servidor.bat`
**Mac/Linux:** No terminal, digite:
```bash
python servidor-local.py
```

#### **Passo 3: Acessar o site**
O navegador abrirá automaticamente em:
`http://localhost:8000`

## 🟢 **Como usar com Node.js:**

#### **Passo 1: Verificar se tem Node.js**
Abra o terminal/prompt e digite:
```bash
node --version
```

#### **Passo 2: Iniciar o servidor**
**Windows:** Duplo clique em `iniciar-servidor-node.bat`
**Mac/Linux:** No terminal, digite:
```bash
node servidor-node.js
```

#### **Passo 3: Acessar o site**
Abra o navegador e vá para:
`http://localhost:8000`

## 📁 **Estrutura dos arquivos:**

```
🍕 Pizzaria do Amor/
├── 🐍 servidor-local.py (servidor Python)
├── 🟢 servidor-node.js (servidor Node.js)
├── 🪟 iniciar-servidor.bat (Windows + Python)
├── 🪟 iniciar-servidor-node.bat (Windows + Node.js)
├── 🍕 index.html (jogo principal)
├── 🎨 style.css (estilos)
├── ⚡ script.js (lógica)
├── 🧪 teste-imagens.html (teste)
└── 📖 COMO-USAR-SERVIDOR.md (este arquivo)
```

## 🚨 **Problemas comuns e soluções:**

### **Erro: "Porta 8000 já está em uso"**
**Solução:** Feche outros programas que possam estar usando a porta 8000
- Outros servidores web
- Aplicações de desenvolvimento
- Ou mude a porta no código (variável `PORT`)

### **Erro: "Python/Node.js não encontrado"**
**Solução:** Instale o programa necessário
- **Python:** https://python.org
- **Node.js:** https://nodejs.org

### **Imagens não carregam**
**Solução:** Verifique se as imagens estão na mesma pasta
- `basepizza.jpg`
- `coracao.jpg`
- `estrela.png`
- `cereja.png`

### **CSS não aplica**
**Solução:** Verifique se o `style.css` está na mesma pasta

### **JavaScript não funciona**
**Solução:** Verifique se o `script.js` está na mesma pasta

## 🌐 **URLs para testar:**

- **Página principal:** `http://localhost:8000/index.html`
- **Teste de imagens:** `http://localhost:8000/teste-imagens.html`
- **Lista de arquivos:** `http://localhost:8000/`

## 🎯 **Passos para testar:**

1. **Inicie o servidor** (Python ou Node.js)
2. **Abra o navegador** em `http://localhost:8000`
3. **Teste o jogo** clicando em `index.html`
4. **Teste as imagens** clicando em `teste-imagens.html`
5. **Verifique se tudo funciona** (arrastar, soltar, animações)

## 🛑 **Como parar o servidor:**

- **Windows:** Feche a janela do prompt
- **Mac/Linux:** Pressione `Ctrl+C` no terminal

## 💡 **Dicas importantes:**

- ✅ **Sempre use o servidor local** para testar
- ✅ **Mantenha todos os arquivos** na mesma pasta
- ✅ **Teste no celular** usando o IP da sua rede local
- ✅ **Verifique o console** do navegador para erros

---

**Agora é só iniciar o servidor e testar sua Pizzaria do Amor! 🍕❤️**
