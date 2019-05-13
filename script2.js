// question / vraag 2.1 step/stap 1:
//https://www.rijksmuseum.nl/api/en/collection?q=***SEARCHQUERY HERE***&key=***YOUR KEY HERE***&ps=5&toppieces=true&format=json

// question / vraag 2.2 step/stap 2:
//https://www.rijksmuseum.nl/api/en/collection/***OBJECT NUMBER HERE***?key=***YOUR KEY HERE&format=json
$( document ).ready( onDocumentReady );

function onDocumentReady()
{
	$( 'input[name="filter"]' ).keyup( prepareSearch );
	$( 'button[name="search"]' ).click( prepareSearch );
}

function prepareSearch( e )
{
	if( e.type == 'click' || ( e.type == 'keyup' && e.key == 'Enter' ) )
	{
		$( '.contentContainer' ).empty();
		var searchQuery = $( 'input[name="filter"]' ).val();
		doSearch( searchQuery );
	}
}

function doSearch( searchQuery )
{
   console.log("do search");
    $.ajax({
			"url" : "https://www.rijksmuseum.nl/api/en/collection?q="+ searchQuery +"&key=erKPKx4b&ps=5&toppieces=true&format=json",
			"method" : "get",
			"dataType" : "json"
		}).done( procesSearchResult ); 
    
    
    
}

function procesSearchResult( data )
{
	if( data.count === 0 )
	{
        console.log(data);
        $('.contentContainer').empty();
        $('.contentContainer').append(
        '<h1>Alas, nothing found. Try a different search term</h1>'
        );
		
	}
	else
	{
       console.log(data);
	  
        for(var i = 0; i < data.artObjects.length; i++)
        {
            
        var item = $( 
		`<div class="item">
			<a href="`+ data.artObjects[i].links.web +`" target="_blank" object-nr="`+ data.artObjects[i].objectNumber+`">
				<img src="`+ data.artObjects[i].headerImage.url +`" alt="`+ data.artObjects[i].longTitle +`">   
				<h1>`+ data.artObjects[i].longTitle +`</h1>
				<p>`+ data.artObjects[i].principalOrFirstMaker +`</p>
			</a>
		</div>`
        )
        
        item.click(artworkClickHandler);
        $('.contentContainer').append(item);
      
    }
	}
}


function artworkClickHandler( e )
{
  e.preventDefault();
  var objectnumber = $(e.currentTarget).find("object-nr");
  console.log(objectnumber);
  
    
}


function createPopup( data )
{
    /*
	`<a href="#" class="popup">
		<h1>LONG_TITLE_HERE</h1>
		<p>PLAQUE_DESCRIPTION_ENGLISH_HERE</p>
	</a>`
    */
}

function removePopup( e )
{

}