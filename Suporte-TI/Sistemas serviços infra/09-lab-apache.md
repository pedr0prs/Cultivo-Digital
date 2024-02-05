# O cenário

Um Web designer da sua empresa desenvolveu um site institucional para dar mais informações aos clientes. Agora seu trabalho é implantar esse site e disponibilizar o conteúdo para o público.

A máquina virtual usada neste laboratório representa a instância em que você vai testar o site fornecido, verificar se ele funciona corretamente, descobrir as etapas necessárias e determinar a configuração. No mundo real, depois de concluir as etapas deste laboratório, você aplicaria a mesma configuração à máquina de produção.

No momento, o site desenvolvido está no diretório /opt/devel/ourcompany. Veja o conteúdo desse diretório:

`ls -l /opt/devel/ourcompany`

<!--
total 20
-rwxr-xr-x 1 student student 561 Aug 11 12:07 aboutus.html
-rwxr-xr-x 1 student student 551 Aug 11 12:07 contact.html
-rwxr-xr-x 1 student student  95 Aug 11 12:07 footer.html
-rwxr-xr-x 1 student student 596 Aug 11 12:07 index.html
-rw-r--r-- 1 student student 777 Aug 11 12:07 style.css
-->

Várias páginas HTML e uma folha de estilo CSS compõem o site que será exibido. Use esse material e siga em frente.

## Como instalar o Apache2

A máquina a que você se conectou ainda não tem um servidor da Web em execução. Para corrigir isso, primeiro atualize a lista de pacotes e depois instale o Apache2:

`sudo apt update && sudo apt install apache2 -y`

Após a instalação, você vai notar que o serviço da Web Apache2 não está em execução.

`sudo service apache2 status`

<!--
apache2 is not running ... failed!
-->

Para iniciar o serviço da Web Apache, use o comando abaixo.

`sudo service apache2 start`

O Apache2 vai exibir a página da Web padrão. Para ver essa página, insira o External IP address que aparece no painel de conexões em uma nova guia do navegador separada.

<!--
It works!
-->

Ótimo! O servidor da Web já está funcionando e exibindo a página padrão.

### Configurar sites

O site padrão informa se o servidor da Web está funcionando. Agora precisamos ter certeza de que o servidor da Web exibe nosso site, e não o site padrão. Vamos ver como os sites são gerenciados pelo Apache2.

Em um servidor da Web, você pode ter vários sites em execução ao mesmo tempo. A porta em que o conteúdo é exibido e o nome do host usado para acessar a máquina determinam qual desses sites o usuário vê. Além disso, vários nomes podem ser usados para se referir ao mesmo endereço IP.

Por exemplo, talvez você tenha um site institucional em execução em `http://www.example.com` e um site de e-commerce em `http://shop.example.com`, ambos hospedados na mesma máquina. Isso é conhecido como hosts virtuais.

A lista de sites disponíveis pode ser acessada em /etc/apache2/sites-available. Vamos ver o conteúdo desse diretório.

`ls -l /etc/apache2/sites-available`

<!--
total 12
-rw-r--r-- 1 root root 1332 Aug  8  2020 000-default.conf
-rw-r--r-- 1 root root 6338 Aug  8  2020 default-ssl.conf
-->

Há dois sites disponíveis. O site padrão configurado por 000-default.conf é aquele que acessamos, e o site criptografado padrão é gerenciado por default-ssl.conf.

Vamos ver o conteúdo do arquivo 000-default.conf para saber como o site padrão é configurado.

`cat /etc/apache2/sites-available/000-default.conf`

<!--
<VirtualHost *:80>
        # A diretiva ServerName define o esquema da solicitação, o hostname e a porta que
        # o servidor vai usar para se identificar. Isso é útil ao criar
        # URLs de redirecionamento. No contexto de hosts virtuais, o ServerName
        # especifica o hostname que deve aparecer no cabeçalho Host: e 
        # corresponder ao deste host virtual . Como este arquivo é o virtual padrão é usado como
        # a última opção de host de qualquer forma, esse valor não é decisivo.
        # No entanto, ele deve ser definido explicitamente para cada host virtual daqui para frente.
        #ServerName www.example.com
 
        ServerAdmin webmaster@localhost
        DocumentRoot /var/www/html
 
        # Níveis de registro disponíveis: trace8, ..., trace1,
        # debug, info, notice, warn, error, crit, alert, emerg.
        # Também é possível configurar o nível de registro para módulos
        # específicos, por exemplo:
        #LogLevel info ssl:warn
 
        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined
 
        # Na maioria dos arquivos de configuração em conf-available/, que são
        # ativados ou desativados em nível global, é possível
        # incluir uma linha para apenas um host virtual específico. Por exemplo, a
        # próxima linha ativa a configuração CGI para este host somente
        # depois dele ter sido desativado em nível global com "a2disconf".
        #Include conf-available/serve-cgi-bin.conf
</VirtualHost> 
 
# vim: syntax=apache ts=4 sw=4 sts=4 sr noet
-->

As linhas que começam com # são comentários. Isso nos dá informações sobre o significado dos diferentes parâmetros e configurações. A configuração em si é muito simples e está descrita nesta seção do arquivo:

- **Não copie a seção do arquivo abaixo**

<!--
<VirtualHost *:80> 
        ServerAdmin webmaster@localhost
        DocumentRoot /var/www/html
        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
-->

Isso indica que o serviço detecta todos os IPs na porta 80. Depois vemos o endereço de e-mail do administrador do serviço, o principal caminho para o site e os caminhos dos arquivos de registros de erro e acesso.

### Como mover o site para o lugar certo

O diretório em que o site padrão está localizado é /var/www/html. É uma prática padrão ter todos os sites em /var/www. Então vamos colocar nosso site lá também. Mova o conteúdo do local atual para /var/www/ourcompany.

`sudo mv /opt/devel/ourcompany /var/www/ourcompany`

O comando mv (como muitos outros no Linux) não gera nenhuma resposta quando é executado corretamente. Para ver se ele funcionou, confira o conteúdo de /var/www.

`ls -l /var/www`

<!--
total 8
drwxr-xr-x 2 root root 4096 Aug 11 12:09 html
drwxr-xr-x 2 root root 4096 Aug 11 12:07 ourcompany
-->
Agora o site está no lugar certo. Volte para a configuração dele no Apache2.

### Como criar um novo site disponível

Como o objetivo é criar seu próprio site, faça uma cópia do site padrão e edite o novo arquivo.

`cd /etc/apache2/sites-available`
`sudo cp 000-default.conf 001-ourcompany.conf`
`sudo nano 001-ourcompany.conf`

O último comando abre o editor de texto nano. Edite o arquivo e faça as alterações necessárias. Neste caso, mude o diretório em que os arquivos são armazenados. Em vez de /var/www/html, coloque o site em /var/www/ourcompany alterando o arquivo de configuração.

<!--
<VirtualHost *:80> 
        # A diretiva ServerName define o esquema da solicitação, o hostname e a porta que
        # o servidor vai usar para se identificar. Isso é útil ao criar
        # URLs de redirecionamento. No contexto de hosts virtuais, o ServerName
        # especifica o hostname que deve aparecer no cabeçalho Host: e 
        # corresponder ao deste host virtual . Como este arquivo é o virtual padrão é usado como
        # a última opção de host de qualquer forma, esse valor não é decisivo.
        # No entanto, ele deve ser definido explicitamente para cada host virtual daqui para frente.
        #ServerName www.example.com
 
        ServerAdmin webmaster@localhost
        DocumentRoot /var/www/ourcompany
 
        # Níveis de registro disponíveis: trace8, ..., trace1,
        # debug, info, notice, warn, error, crit, alert, emerg.
        # Também é possível configurar o nível de registro para módulos
        # específicos, por exemplo:
        #LogLevel info ssl:warn
 
        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined
 
        # Na maioria dos arquivos de configuração em conf-available/, que são
        # ativados ou desativados em nível global, é possível
        # incluir uma linha para apenas um host virtual específico. Por exemplo, a
        # próxima linha ativa a configuração CGI para este host somente
        # depois dele ter sido desativado em nível global com "a2disconf".
        #Include conf-available/serve-cgi-bin.conf
</VirtualHost>
 
# vim: syntax=apache ts=4 sw=4 sts=4 sr noet
-->

### Como ativar e desativar sites

Você adicionou um site que direciona para o local correto, mas ainda não foi ativado. O site padrão ainda está ativo no momento. O Apache2 permite ter sites disponíveis sem que eles estejam necessariamente ativos para evitar mudanças problemáticas. Os sites ativos são gerenciados em /etc/apache2/sites-enabled. Veja o conteúdo desse diretório:

`ls -l /etc/apache2/sites-enabled`

As setas mostram que esse arquivo é um link simbólico para o arquivo no diretório sites-available. Ou seja, ativar ou desativar um site no Apache2 significa simplesmente criar ou remover um link simbólico entre os diretórios sites-available e sites-enabled.

Para simplificar: há dois comandos, a2ensite e a2dissite, que gerenciam esses links simbólicos. Os nomes vêm das strings de ativar/desativar o site no Apache2. Use esses comandos para ativar o novo site e desativar o padrão.

`sudo a2ensite 001-ourcompany.conf`

<!--
Enabling site 001-ourcompany.
To activate the new configuration, you need to run:
  service apache2 reload
-->

`sudo a2dissite 000-default.conf`

<!--
Site 000-default disabled.
To activate the new configuration, you need to run:
  service apache2 reload
-->
Agora veja o conteúdo do diretório novamente:

`ls -l /etc/apache2/sites-enabled`

<!--
total 0
lrwxrwxrwx 1 root root 38 Aug 11 12:19 001-ourcompany.conf -> ../sites-available/001-ourcompany.conf
-->
Nosso site está ativo.

No entanto, como indicado nos comandos a2, se você atualizar a página direcionada para sua máquina, verá que o site padrão ainda será exibido. Mais uma etapa é necessária para o Apache2 detectar a mudança na configuração: solicite a atualização do serviço.

`sudo service apache2 reload`

Esse comando não gera resposta quando é executado corretamente. Para saber se ele funcionou, acesse a página da Web. Você vê o site institucional?

## Configurações adicionais

Ao final do site, há uma linha horizontal separando o conteúdo da área onde haveria um rodapé, mas esse rodapé não mostra nada.

Analise o conteúdo da página index.html:

`cat /var/www/ourcompany/index.html`

<!--
<html> 
        <head> 
                <link rel="stylesheet" type="text/css" href="style.css"> 
                <title> Our Institutional website </title> 
        </head> 
        <body> 
                <div class="content"> 
                <div class="main"> 
                        <h1>Welcome!</h1>
                        <p>This is our institutional website. You can learn more <a href="aboutus.html">about us</a> or<a href="contact.html">get in contact with us</a>.</p> 
                </div> 
                </div> 
                #include file="footer.html"
        </body> 
</html>
-->

O rodapé usa um recurso fornecido pelo Apache2 chamado Server Side Includes (SSI), que não está ativado no momento. Por isso, não aparece nada ali.

Ative esse recurso para que o site funcione corretamente.

### Como ativar módulos

Da mesma maneira que podemos ter uma lista de sites disponíveis e ativar cada um deles conforme necessário, também há uma lista de módulos que oferecem recursos adicionais. Há muitos disponíveis, mas somente alguns foram ativados.

Veja a lista de módulos disponíveis:

`ls /etc/apache2/mods-available`

<!--
access_compat.load    buffer.load         headers.load              mpm_prefork.load     reqtimeout.load
actions.conf          cache.load          heartbeat.load            mpm_worker.conf      request.load
actions.load          cache_disk.conf     heartmonitor.load         mpm_worker.load      rewrite.load
alias.conf            cache_disk.load     http2.conf                negotiation.conf     sed.load
alias.load            cache_socache.load  http2.load                negotiation.load     session.load
allowmethods.load     cern_meta.load      ident.load                proxy.conf           session_cookie.load
asis.load             cgi.load            imagemap.load             proxy.load           session_crypto.load
auth_basic.load       cgid.conf           include.load              proxy_ajp.load       session_dbd.load
auth_digest.load      cgid.load           info.conf                 proxy_balancer.conf  setenvif.conf
auth_form.load        charset_lite.load   info.load                 proxy_balancer.load  setenvif.load
authn_anon.load       data.load           lbmethod_bybusyness.load  proxy_connect.load   slotmem_plain.load
authn_core.load       dav.load            lbmethod_byrequests.load  proxy_express.load   slotmem_shm.load
authn_dbd.load        dav_fs.conf         lbmethod_bytraffic.load   proxy_fcgi.load      socache_dbm.load
authn_dbm.load        dav_fs.load         lbmethod_heartbeat.load   proxy_fdpass.load    socache_memcache.load
authn_file.load       dav_lock.load       ldap.conf                 proxy_ftp.conf       socache_shmcb.load
authn_socache.load    dbd.load            ldap.load                 proxy_ftp.load       speling.load
authnz_fcgi.load      deflate.conf        log_debug.load            proxy_hcheck.load    ssl.conf
authnz_ldap.load      deflate.load        log_forensic.load         proxy_html.conf      ssl.load
authz_core.load       dialup.load         lua.load                  proxy_html.load      status.conf
authz_dbd.load        dir.conf            macro.load                proxy_http.load      status.load
authz_dbm.load        dir.load            md.load                   proxy_http2.load     substitute.load
authz_groupfile.load  dump_io.load        mime.conf                 proxy_scgi.load      suexec.load
authz_host.load       echo.load           mime.load                 proxy_uwsgi.load     unique_id.load
authz_owner.load      env.load            mime_magic.conf           proxy_wstunnel.load  userdir.conf
authz_user.load       expires.load        mime_magic.load           ratelimit.load       userdir.load
autoindex.conf        ext_filter.load     mpm_event.conf            reflector.load       usertrack.load
autoindex.load        file_cache.load     mpm_event.load            remoteip.load        vhost_alias.load
brotli.load           filter.load         mpm_prefork.conf          reqtimeout.conf      xml2enc.load
-->

Essa lista é longa. Para saber qual módulo ativar, normalmente, você consultaria a documentação do Apache2.

No nosso caso, sabemos que queremos ativar include, que é o módulo usado para Server Side Includes. Assim como a2ensite e a2dissite, há a2enmod e a2dismod para gerenciar quais módulos são ativados. Agora ative include.

`sudo a2enmod include`

<!--
Considering dependency mime for include:
Module mime already enabled
Enabling module include.
To activate the new configuration, you need to run:
  service apache2 restart
-->

A mensagem diz que é preciso reiniciar o servidor. Atualizar não é suficiente, já que essa não é uma mudança de configuração. É preciso instalar um novo recurso no servidor. Vamos fazer isso.

`sudo service apache2 restart`

Com isso, o recurso é ativado no servidor.

No entanto, se você atualizar o site, verá que o rodapé ainda não aparece. Ele também precisa ser ativado na configuração do site.

### Opções de configuração

Para o site usar o Server Side Includes, é preciso definir algumas opções no arquivo de configuração dele. Então abra esse arquivo novamente e adicione as linhas necessárias.

`sudo nano /etc/apache2/sites-available/001-ourcompany.conf`

Esse é o snippet que você precisa adicionar após a linha DocumentRoot:

<!--
<Directory /var/www/ourcompany>
        Options +Includes
        XBitHack on
</Directory>
-->
Esse snippet indica que queremos adicionar Includes como uma opção para o diretório /var/www/ourcompany. Também ativamos uma sinalização chamada XBitHack. Assim indicamos se um arquivo usa Server Side Includes ou não ao configurar o arquivo como executável (o que é nosso caso).

<!--
<VirtualHost *:80>
        # A diretiva ServerName define o esquema da solicitação, o hostname e a porta que
        # o servidor vai usar para se identificar. Isso é útil ao criar
        # URLs de redirecionamento. No contexto de hosts virtuais, o ServerName
        # especifica o hostname que deve aparecer no cabeçalho Host: e 
        # corresponder ao deste host virtual . Como este arquivo é o virtual padrão é usado como
        # a última opção de host de qualquer forma, esse valor não é decisivo.
        # No entanto, ele deve ser definido explicitamente para cada host virtual daqui para frente.
        #ServerName www.example.com
 
        ServerAdmin webmaster@localhost
        DocumentRoot /var/www/ourcompany
 
        <Directory /var/www/ourcompany> 
                Options +Includes 
                XBitHack on
        </Directory>    
 
        # Available loglevels: trace8, ..., trace1, debug, info, notice, warn,
        # error, crit, alert, emerg.
        # Também é possível configurar o nível de registro para módulos
        # específicos, por exemplo:
        #LogLevel info ssl:warn

        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined

        # Na maioria dos arquivos de configuração em conf-available/, que são
        # ativados ou desativados em nível global, é possível
        # incluir uma linha para apenas um host virtual específico. Por exemplo, a
        # próxima linha ativa a configuração CGI para este host somente
        # depois dele ter sido desativado em nível global com "a2disconf".
        #Include conf-available/serve-cgi-bin.conf
</VirtualHost>
 
# vim: syntax=apache ts=4 sw=4 sts=4 sr noet
-->
Em seguida, peça que o Apache2 atualize a configuração outra vez para detectar essa última alteração:

`sudo service apache2 reload`

Agora, se você acessar a página da Web, não só verá o site, como também o rodapé.
