$(() => {
  /*
! AS a SETTER
*/

  $("a").attr("href", "allMyHrefsAreTheSameNow.html");

  $("a").attr({
    title: "all titles are the same too!",
    href: "somethingNew.html",
  });

  /*
! As a GETTER
*/

  const aHref = $("a").attr("href");
  `Returns the href for the first 'a' element
                          in the document`;

  console.log(aHref);
});
