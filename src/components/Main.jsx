import React from "react"

export default function Main(props) {
    return (
        <main className={props.darkMode?"dark":""}>
            <h1 className="main-h1">Fun facts about React</h1>
            <ul className="main-ul">
                <li>首發於2013年</li>
                <li>最初由 Jordan Walke 創建</li>
                <li>在 GitHub 上擁有超過 10 萬顆星</li>
                <li>由 Facebook 維護</li>
                <li>支持數以千計的企業應用程序，包括移動應用程序</li>
            </ul>
        </main>
    )
}

