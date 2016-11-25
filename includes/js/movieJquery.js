$(document).ready(function(){
			$("button").click(function(){
				var movieList=$("#movieList");
				var title=$("#movie").val();

				$.ajax({
					type: 'GET',
					url: "http://www.omdbapi.com/?s="+title,
					
					error: function() {
						$(movieList).html('<p>An error has occurred</p>');
					},
					
					success: function(data) {
					
						//$.each(data,function(key, val){
							var list=data.Search;
							var imgPoster;
							 $('#display').html("");
							//var total=data.totalResults;
							var total=data.totalResults;
							console.log(data.totalResults);
							//$("#info").show();

							/*var prop=data.Search.Year;
							var asc = true;
							list = list.Year.sort(function(a, b) {
								if (asc) return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
								else return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
							});*/

							list.sort(function(a, b) {
								return parseFloat(b.Year) - parseFloat(a.Year);
							});



							if (total==0)
							{
								$("#display").append("<b>Sorry,No data found</b>")
							}
							else
							{
								for(var i=0;i<total;i++)
								{
									if(list[i].Poster=="N/A")
									{
									imgPoster="Images/poster.png";

									}
									else
									{
									imgPoster=list[i].Poster;
									}
									$("#display").append("<div class="+"col-sm-6"+">"+"<div class="+" panel panel-info "+">"
											 +"<div class="+" panel-heading "+"><b> <h3>"+ list[i].Title +"  </div>"
											  +"<div class="+" panel-body  "+"> <b>Year: </b>"+ list[i].Year +"</div>"
											  +"<div class="+" panel-body "+"> <b>imdbID: </b>" +list[i].imdbID+ "</div>"
											  +"<div class="+" panel-body "+"> <b>Type: </b>" +list[i].Type+ "</div>"
											  +"<div class="+" panel-body "+">"+"<img class="+" img-responsive "+" width= "+" 300 "+" height= "+" 400 "
											  +" src= " +imgPoster+ "></div>"
											+"</div></div>");
																				
								/*$("#display").append("<div class="+"col-sm-6"+"><ul><li"+list[i].Title+"</li>"+
									"<li><b>Year:</b>"+list[i].Year+"</li><br>"+
									"<li><b>imdbID:</b>"+list[i].imdbID+"</li><br>"+
									"<li><b>Type:</b>"+list[i].Type+"</li><br><br>"+
									'<li><img class="img-responsive" width="300" height="300" src="'+imgPoster+'"</li></ul></br></br></div>');*/
									
								}
								/*$.each(data,function(key, val)
								{
										$.each(val,function(i,value)
										{
									if(i=="Poster")
									{		
										if(value=='N/A')
										{
										imgPoster="Images/poster.png";

										}
										else
										{
										imgPoster=value;
										}
									}	
									
								$("#display").append("<table><tr><td><b>"+i+"</b>"+value+"</td></tr></table>");*/
							}
							
						//});
							//$("div").remove("#display");
							


					},
					
				});
			
			});	
		});