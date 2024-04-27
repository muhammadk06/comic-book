AFRAME.registerComponent('page-controls',{
    schema:{
        pages:{type: 'array', default:[
            {
                page: 'p1',
            color: '#d471aa'
            },
            {
                page: 'p2',
            color: '#494949'
            },
            {
                page: 'p3',
            color: '#d471aa'
            },
            {
                page: 'p4',
            color: '#d471aa'
            },
            {
                page: 'p5',
            color: '#d471aa'
            }
        
        ]},
        pageIndex:{type: 'int', default: 0}
    },
    init: function () {
        var pageEl = this.pageEl = document.querySelector('[layer]');
        pageEl.object3D.position.set(0, 1.8, -2.5);
        var pageIndex = this.data.pageIndex;
        window.addEventListener("keydown", (e) => {
          if (e.key === "ArrowRight" & pageIndex < 4) {
            pageIndex += 1;
            this.turnPage(pageIndex);
          }
          if (e.key === "ArrowLeft" & pageIndex > 0) {
            pageIndex -= 1;
            this.turnPage(pageIndex);
          }
        });
      },
      turnPage: function (pageIndex) {
        var pages = this.data.pages;
        var pageId = pages[pageIndex].page;
        var color = pages[pageIndex].color;
        this.pageEl.setAttribute('layer', 'src', '#' + pageId);
        this.el.sceneEl.setAttribute('background', 'color', color);
      },
    });

    
