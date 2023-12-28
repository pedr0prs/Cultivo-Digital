## Hardwares e dispositivos de expansão

## Entendendo IO e IRQs

O hardware para fazer a comunicação com o computador utiliza ioports para enviar e receber dados e para o processador saber se tem que receber ou enviar algum dado para o dispositivo ele utiliza as interrupções. 

Em máquinas que há mais de um processador, cada um irá cuidar de uma interrupção diferente, para que um processador não seja interrompido o tempo todo e não ter q lidar apenas com hardware. 

# apt install irqtop = melhor formar de gerenciar as interrupções 

## Listando e identificando dispositivos

/proc# lspci = lista todos os periféricos que estão conectados no barramento pci do sistema. 

/proc# lspci -vv = detalhes de configurações 

/proc# lsusb = lista todos os dispositivos usb 

/proc# apt install lshw = programa para listar todos os hardwares 

## Firmwares binárias

A firmware é uma peça de código que vem externa placa e geralmente é um código que não é compatível com o Kernel do linux. Alguns hardwares existem alguns segredos estratégicos que os fabricantes não querem revelar.

# 

## ACPI e teclas de gerenciamento de energia

ACPI é um padrão que permite uma gerencia mais eficiente da energia dos dispositivos, gerencia dos recursos e utilização mais eficiente da interação entre processador e os hardwares para melhorar os recursos que cada um possui, que recursos são esses: economia de energia, gerenciamento de performance e também gerenciamento de suspensão dos dispositivos. 

/mnt# apt install acpid = Um deamon que faz o controle e monitoramento do acpi da máquina, caso tenha uma máquina desktop ou um servidor e ele não desliga corretamente quando apertado no botão power, o acpid ele irá realizar isso de forma correta e ganhará outros recursos.