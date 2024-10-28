export default (editor) => {
    const bm = editor.Blocks;

    bm.add('section', {
        label: '영역',
        category: '레이아웃',
        content: 
            `<table style="height: 150px; width: 100%; padding: 5px; margin: auto;">
                <tbody>
                    <tr data-gjs-type="row">
                        <td data-gjs-type-"cell"></td>
                    </tr>
                </tbody>
            </table>`
    });

    bm.add('divider', {
        label: '구분선',
        category: '요소',
        content:
        `<div style="padding: 15px;">
            <div data-gjs-type="none" data-gjs-highlightable="false" style="height: 1px; display: block; padding:0px; margin: 0px; border-top: 1px solid rgb(153, 153, 153);">
            </div>
        </div>`
    });

    bm.add('image', {
        label: '이미지',
        content: '<img data-gjs-type="image" />',
        category: '요소',
    });

    bm.add('video' ,{
        label: '동영상 미리보기',
        category: '요소',
        content: 
        `<div data-gjs-type="video" style="width: 200px;">
        </div>
        `
    })

    bm.add('list-item', {
        label: '1단 가로',
        category: '요소',
        content:
        `<table style="height: 150px; width: 100%; padding: 10px; margin: auto;">
            <tbody>
                <tr data-gjs-type="row">
                    <td data-gjs-type="cell" style="width: 30px;">
                        <img data-gjs-type="image" />
                    </td>
                    <td data-gjs-type="cell" >
                        <h1>제목 삽입</h1>
                        <p>여기에 내용을 입력하세요</p>
                    </td>
                </tr>
            </tbody>
        </table>
        `
    });

    bm.add('list-item2', {
        label: '2단 가로',
        category: '요소',
        content:
        `<table  data-gjs-type="table"  class="grid-item-row" style="width: auto;">
        <tbody  data-gjs-type="tbody" >
            <tr  data-gjs-type="row" >
                <td  data-gjs-type="cell"  class="grid-item-cell2-l">
                    <table  data-gjs-type="table"  class="grid-item-card">
                        <tbody  data-gjs-type="tbody" >
                            <tr  data-gjs-type="row" >
                                <td  data-gjs-type="cell"  class="grid-item-card-cell"><img id="ihm387" data-gjs-type="image"  src="https://via.placeholder.com/250x150/78c5d6/fff/" alt="Image" class="grid-item-image">
                                    <table   data-gjs-type="table"  class="grid-item-card-body gjs-selected">
                                        <tbody  data-gjs-type="tbody" >
                                            <tr  data-gjs-type="row" >
                                                <td  data-gjs-type="cell"  class="grid-item-card-content">
                                                    <h1   data-gjs-type="text"  class="card-title">Title here</h1>
                                                    <p   data-gjs-type="text"  class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                <td  data-gjs-type="cell"  class="grid-item-cell2-r">
                    <table  data-gjs-type="table"  class="grid-item-card">
                        <tbody  data-gjs-type="tbody" >
                            <tr  data-gjs-type="row" >
                                <td  data-gjs-type="cell"  class="grid-item-card-cell"><img id="i4osmt" data-gjs-type="image"  src="https://via.placeholder.com/250x150/78c5d6/fff/" alt="Image" class="grid-item-image">
                                    <table  data-gjs-type="table"  class="grid-item-card-body">
                                        <tbody  data-gjs-type="tbody" >
                                            <tr  data-gjs-type="row" >
                                                <td  data-gjs-type="cell"  class="grid-item-card-content">
                                                    <h1  data-gjs-type="text"  class="card-title">Title here</h1>
                                                    <p  data-gjs-type="text"  class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
        `
    })

    bm.add('original-grid', {
        label: '오리지널 그리드 아이템',
        category:'요소',
        content:
        `<table data-gjs-type="table"  class="grid-item-row">
        <tbody data-gjs-type="tbody" >
            <tr data-gjs-type="row" >
                <td data-gjs-type="cell"  class="grid-item-cell2-l">
                    <table data-gjs-type="table"  class="grid-item-card">
                        <tbody data-gjs-type="tbody" >
                            <tr data-gjs-type="row" >
                                <td data-gjs-type="cell"  class="grid-item-card-cell"><img id="ihm387" data-gjs-type="image"  src="https://via.placeholder.com/250x150/78c5d6/fff/" alt="Image" class="grid-item-image">
                                    <table  data-gjs-type="table"  class="grid-item-card-body gjs-selected">
                                        <tbody data-gjs-type="tbody" >
                                            <tr data-gjs-type="row" >
                                                <td data-gjs-type="cell"  class="grid-item-card-content">
                                                    <h1 data-gjs-type="text"  class="card-title">Title here</h1>
                                                    <p data-gjs-type="text"  class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                <td data-gjs-type="cell"  class="grid-item-cell2-r">
                    <table data-gjs-type="table"  class="grid-item-card">
                        <tbody data-gjs-type="tbody" >
                            <tr data-gjs-type="row" >
                                <td data-gjs-type="cell"  class="grid-item-card-cell"><img id="i4osmt" data-gjs-type="image"  src="https://via.placeholder.com/250x150/78c5d6/fff/" alt="Image" class="grid-item-image">
                                    <table data-gjs-type="table"  class="grid-item-card-body">
                                        <tbody data-gjs-type="tbody" >
                                            <tr  data-gjs-type="row" >
                                                <td  data-gjs-type="cell"  class="grid-item-card-content">
                                                    <h1  data-gjs-type="text"  class="card-title">Title here</h1>
                                                    <p  data-gjs-type="text"  class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>`
    })

    // rgba(255, 82, 82)
    bm.add('button', {
        label: '버튼',
        category: '요소',
        content:
        `<div style="text-align: center">
            <a contenteditable="true" 
            style="font-size: 16px; 
            text-align: center;
            display: inline-block; color: rgb(255, 255, 255); background: rgb(255, 82, 82); border-radius: 3px; border-style: solid; border-width: 0px; padding: 19px 20px; text-decoration: none; text-align: center; outline: 0px; font-family: AppleSDGothic, &quot;apple sd gothic neo&quot;, &quot;noto sans korean&quot;, &quot;noto sans korean regular&quot;, &quot;noto sans cjk kr&quot;, &quot;noto sans cjk&quot;, &quot;nanum gothic&quot;, &quot;malgun gothic&quot;, dotum, arial, helvetica, sans-serif; line-height: 1; box-sizing: border-box;">버튼 이름</a>
        </div>
        `
    })

    bm.add('space', {
        label: '공백',
        category: '요소',
        content:
        `<div style="height:50px; padding: 0px;">
        </div>
        `
    });
    
    bm.add('sns', {
        label: 'SNS 링크',
        category: '요소',
        content:
        `<div style="text-align: center;">
            <span style="display: inline-block; padding: 2px 10px 2px 10px;" data-gjs-type="link"><img data-gjs-type="none" src="./instagram-sns.png" style="width: 30px;" /></span>
            <span style="display: inline-block; padding: 2px 10px 2px 10px"><img data-gjs-type="none" src="./twitter-sns.png" style="width: 30px;" /></span>
            <span style="display: inline-block; padding: 2px 10px 2px 10px;"><img data-gjs-type="none" src="./naver-sns.png" style="width: 30px" /></span>
        </div>
        `

    })

    bm.add('footer', {
        label: '푸터',
        category: '요소',
        content:
        `<div style="text-align: center;">
            <span style="text-align: center; width: 100%">회사명 또는 이메일</span> <br/>
            <span style="text-align: center; width: 100%">주소 또는 전화번호 입력</span> <br/>
            <a href="" style="text-decoration: underline; text-align: center; width: 100%">수신 거부</a>
        </div>
        `
    })

    bm.add('link', {
        label : '링크',
        category: '요소',
        content:
        `
        
        <a href="">링크 주소를 입력하세요</a>
        `
    })

   
};