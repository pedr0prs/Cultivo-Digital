# Segurança 

## securetty 

Normalmente um arquivo que reside dentro desde arquivo:

$ cat /etc/securetty | less

Esse comando lista os terminais que usuário root tem permissões para logar.

$ w 

exibe os usuários que estão conectados na máquina 

$ export TMOUT=10 

Desloga automáticamente todos os usuário

$ tail -f /var/log/auth.log 

depuração dos logs de autenticações sistemas debian e ubuntu


## restringindo usuários ssh 

$ cd /etc/ ssh = diretório de configuração do ssh

    Aqui há dois arquivos principais, que são:

        - ssh_config - que é a configuração do cliente ssh, ou seja, quando rodamos o comando: 
            $ ssh localhost = a configuração que o interpretador lê é do ssh_config.

        - sshd_config - que é a configuração do servidor ssh, o d no final significa deamon que é um servidor. 

todos arquivos podem ser editados! 
Podemos restringir acessos de usuários no ssh 


