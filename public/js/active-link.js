
$(function(){

  function showResult(results){
    $('#result').append('div')
      .html(`

      <table class="table table-bordered">
        <thead>
          <tr><th colspan="2">Result</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p id="winner-archer-lost">winner-archer-lost</p>   
            </td>
            <td>
              <p id="loser-archer-lost">loser-archer-lost</p>
            </td>
          </tr>

          <tr>
            <td>
              <p id="winner-cav-lost">winner-cav-lost</p>
            </td>
            <td>
              <p id="loser-cav-lost">loser-cav-lost</p>
            </td>
          </tr>

          <tr>
            <td>
              <p id="winner-knight-lost">winner-knight-lost</p>
            </td>
            <td>
              <p id="loser-knight-lost">loser-knight-lost</p>
            </td>
          </tr>

          <thead>
            <tr><th colspan="2">Winner is...!</th></tr>
          </thead>
        </tbody>
      </table>
    `)
  }

  showResult()

});
