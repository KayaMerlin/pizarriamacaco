#!/usr/bin/env python3
"""
Teste rápido do servidor - Pizzaria do Amor
"""

import urllib.request
import urllib.error
import time

def testar_servidor():
    """Testa se o servidor está funcionando"""
    urls = [
        "http://localhost:8001/",
        "http://127.0.0.1:8001/",
        "http://localhost:8000/",
        "http://127.0.0.1:8000/"
    ]

    print("🧪 TESTANDO SERVIDOR LOCAL")
    print("=" * 40)

    for url in urls:
        try:
            print(f"🔍 Testando: {url}")
            response = urllib.request.urlopen(url, timeout=5)
            status = response.getcode()
            if status == 200:
                print(f"✅ FUNCIONANDO! Status: {status}")
                print(f"🌐 Acesse: {url}")
                return True
            else:
                print(f"❌ Status inesperado: {status}")
        except urllib.error.URLError as e:
            print(f"❌ Erro: {e}")
        except Exception as e:
            print(f"❌ Erro geral: {e}")

        time.sleep(0.5)

    print("\n" + "=" * 40)
    print("💡 SOLUÇÕES:")
    print("1. Certifique-se de que o servidor está rodando")
    print("2. Execute: python servidor-local.py")
    print("3. Ou use: python -m http.server 8001")
    print("4. Teste no navegador: http://localhost:8001")
    return False

if __name__ == "__main__":
    testar_servidor()
