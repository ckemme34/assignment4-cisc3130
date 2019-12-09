let word = [];
let value = [];
let category = [];
let data = [];
let value1 = [0];

fetch('scripts/output.txt')
    .then(response => response.text())
    .then(text => {
        let frequencyArray = text.split(/\r?\n/);
        for(let i = 0; i < frequencyArray.length; i++) {
            value[i] = parseFloat(frequencyArray[i].replace(":", ""));
            word[i] = frequencyArray[i];
            word[i] = word[i].replace(value[i] + ":", "");

            if(value[i] >= 30)
                category[i] = "Most Frequently Used";
            else if(value[i] >= 10)
                category[i] = "Frequently Used";
            else if(value[i] >= 2)
                category[i] = "Infrequently Used";
            else if(value[i] === 1)
                category[i] = "Used Once";
            }

            anychart.onDocumentReady(function() {

                    for(let i = 0; i < value.length - 1; i++) {
                        value[i] = value[i].toString();
                        value1 = parseFloat(value[i]);
                        console.log(value1);
                        data[i] = {"x": word[i], "value":value1, category: category[i]}
                    }


                // create a tag (word) cloud chart
                let chart = anychart.tagCloud(data);

                // set a chart title
                chart.title('');
                // set an array of angles at which the words will be laid out
                chart.angles([0, 45, 90]);
                // enable a color range
                chart.colorRange(true);
                // set the color range length
                chart.colorRange().length('100%');

                // display the word cloud chart
                chart.container("container");

                chart.draw();

                chart.listen("pointClick", function(e){
                    let url = "https://www.merriam-webster.com/dictionary/" + e.point.get("x");
                    window.open(url, "_blank");
            });

        });
    });



