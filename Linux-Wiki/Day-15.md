### Gerenciamento de Logs - o que é e como visualizar ?

Log são arquivos onde serão guardados eventos, por exemplo, quando alguém entra no sistema, gera um log que é guardado em um arquivo, /var/log

log é diferente de erro, porém os erros estão guardados dentro do log

Log é tudo que está acontecendo em sua máquina, como um registro.

tail -f arquivo = mostra as ultimas 10 linhas do arquivo 

# rsyslog.conf | Criando nosso log

Cria servidores de logs usando UDP e TCP é uma maneira de centralizar os logs..

rules 

facilidade.prioridade                                         caminho

## Montando um servidores de logs

abre o rsyslog 

habilita #module udc e tcp

tcp é mais confiavél 

:wq

em outra máquina

vai para o etc/rsyslog.d# cria arquivo.conf

auth.*                               @endereço ou IP se for nome tem que olhar o dns

#systemctl restart rsyslog && status

## O LOGROTATE

Rotação de logs, pedir para que ele faça alguma coisa todo dia, talvez um backup e podendo escolher em quanto em quanto tempo, etc…

sempre compactar os arquivos compress

isso nas configurações dele .conf

logrotate -f arquivo de configuração faz acontecer tudo 

logrotate.d é configuração específica para cada um 

cron é como se fosse um contadador de dias, semanas, meses 

anacron é como se fosse um cronomico 

tudo isso é importante para que faça a rotação de logs e assim não encher o disco e tenhamos uma boa administração e gerenciamento de logs

# Descomplicando o Journalctl

journalctl = mostra todos os logs antigos até os recentes

journalctl -b = mostra os logs mais recentes

journalctl --utc = pela zona

journalctl -b --since “2023-10-21 07:00” --until “2023-10-21 07:30”

journalctl --since today = mostra os logs do dia

journalctl --since today --until “1 hours ago”

journalctl -u su = unity pesquisa tudo do su

journalctl -k -u err = mostra todas as msg de erro do kernel

journalctl -k -o json-pretty = em json

journalctl -k -n 3 = mostra as ultimas 3