function test_1(){
  n = 2
  m = 2
  prob = [[.8, .2, .3, .7], [.6, .4, .1, .9]]
  cost = [[1, 3, 2, 4], [2, 4, 3, 5]]
  Entrada(n, m, prob, cost)
}

function test_2(){

}

function Entrada(n, m, prob, cost){
  $('input[name="n"]').val(n)
  $('input[name="m"]').val(m)
  CrearMTablas(n, m)
  for(var j = 0; j < prob.length; j++){
      for(var i = 0; i < prob[j].length; i++){
          $('table.lectura[name="probabilidades"]').eq(j).find('input').eq(i).val(prob[j][i])
  		$('table.lectura[name="costos"]').eq(j).find('input').eq(i).val(cost[j][i])
      }
  }
}
