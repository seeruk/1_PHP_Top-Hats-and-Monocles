        <div id="RightColumn" class="SideColumn">
            <div class="SideBarBox right">
                <form method="POST">
                    <input name="iptLoginUser" type="text" />
                    <input name="iptLoginPass" type="password" />
                    <input name="iptLoginSubmit" type="submit" />
                </form>
            </div>
        </div>
        <div id="Footer">
            <div class="lines"></div>
            <div>
                <span class="main serif">Copyright &copy; {{$smarty.now|date_format:"%Y"}} Top Hats & Monocles</span>
                <span class="desc serif">Part of the Unknown Degree network</span>
                <span class="desc serif">(<a href="">http://www.unknown-degree.net</a>)</span>
            </div>
            <div class="lines"></div>
        </div>
    </body>
</html>