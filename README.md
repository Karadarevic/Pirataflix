# Pirataflix
Construindo um catálogo usando poster de filmes

O código pode ser dividido em três partes:
  1. Os filmes que já estão na página
  2. Os filmes que você pode adicionar
  3. Remover os filmes
  
Na primeira versão do código eu estava usando document.write pra cada filme pré-fixado na página, o que não é muito prático
pq toda vez que vc quiser adicionar um filme vai ter que fazer o document.write de novo.

A versão atual do código não precisa mais disso, criei uma lista onde você pode colocar seus filmes pré definidos e a function layout
vai fazer o document.write automaticamente. Essa função tem um loop for que vai escrever no HTML todos os filmes que você inserir o link
na lista.

Também pode adicionar o filme na própria página apenas inserindo o link no input e clicando em "adicionar filmes"
Para remover o filme é só dar um duplo clique

Problemas ja encontrados:

1- Quando você adicionar um novo filme através do input, o poster vai empurrar os pré-fixados para baixo e será inserido entre estes e o input.
   Se colocar outro em seguida ele irá aparecer ao lado do primeiro inserido e assim por diante até o final da página, só então ele irá para a linha de baixo.

2- Ao dar o duplo clique em um filme pré-fixado ele não será apagado, essa função só funciona com filmes que você inserir no input.

Próximas atualizações:

1- Fazer com que os novos filmes adicionados apareçam ao lado dos pré-fixados.
2- Limitar quantos filmes podem ser alinhados antes de passar para a linha de baixo para que não vão até o final da tela
3- Permitir que os filmes pré-fixados sejam apagados com o duplo-clique.
