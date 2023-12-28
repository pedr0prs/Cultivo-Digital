### Permissões é baseado em usuários e grupos, porém isso é definido por arquivo ou diretórios, descomplicando gerenciamento de permissões.

umask = define a permissão padrão do arquivo

chmod = mod as permissoes

chown = mod o dono/grupo do arq/diretório

chgrp = mod o grupo do arq/diretório 

stick bit = somente o dono do arquivo que terá a permissão da escrita em cima do arquivo criado pelo mesmo. 

```
Complemento sobre a explicação SGID / SUID - S maiúsculo
------------------------------------------------------

Caso você encontre em algum local a permissão SUID ou SGID com  'S' maiúsculo:

--wSr-xr-x 1 gleydson gleydson 28 jan  4 13:39 teste

-rwx--Sr-x 1 gleydson gleydson 28 jan  4 13:39 teste

isto significa que naquela posição do 'S' NÃO existe permissão de execução (4255 ou 2705 octal
por exemplo).
Basicamente é uma interpretação visual e rápida de entender que há uma permissão:

Octal 4255:
--wSr-xr-x 1 gleydson gleydson 28 jan  4 13:39 teste

Octal 2705:
-rwx--Sr-x 1 gleydson gleydson 28 jan  4 13:39 teste

```