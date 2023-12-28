# DAY 13 - GERENCIADORES DE PACOTES - DPKG E APT

$ cat /etc/issue = mostra a versão da distribuição

toda base de pacote é gerenciada pelo dpkg, porém dpkg não puxa dependencias, apenas o que estiver instalado na máquina .deb

$ sudo su - 

$ dpkg -i nome do pacote = instala o pacote 

$ reset = reseta o terminal 

$ dpkg -l nome= lista todos os pacotes instalados

$ dpkg -r = remove o .deb

$ dpkg -P nome = remove com purge 

$ dpkg -L = lista todos arquivos do pacotes 

$ dpkg -S = mostra para qual paconte pertence o arquivo 

$ dpkg -I = informação referente ao paconte 

$ dpkg -s = mostra o status do aplicativo instalado 

$ dpkg -C = procura pacotes corrompidos 

$ dpkg --configure nome = configura o pacote

DPKG não resolve dependencia


veja apt
