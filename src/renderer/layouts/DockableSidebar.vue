<template>
    <div id="test">
        <Dialog :open="aboutOpen" :onClose="closeAbout">
            test
            <Logo :nopadding="true"/>
        </Dialog>
        <section class="handle" :class="{'open': menuStatus}">
            <div @click="toggleMenuStatus" class="icon">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 384.97 384.97" style="enable-background:new 0 0 384.97 384.97;" xml:space="preserve">
                    <g>
                    <g id="Menu_1_">
                        <path d="M12.03,120.303h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03
                            c-6.641,0-12.03,5.39-12.03,12.03C0,114.913,5.39,120.303,12.03,120.303z"/>
                        <path d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03
                            S379.58,180.455,372.939,180.455z"/>
                        <path d="M372.939,264.667H132.333c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h240.606
                            c6.641,0,12.03-5.39,12.03-12.03C384.97,270.056,379.58,264.667,372.939,264.667z"/>	
                    </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                </svg>
            </div>
            <Logo :nopadding="true"/>
        </section>
        <section class="overlay" :class="{'open': menuStatus}"  @click="toggleMenuStatus" />
            <section class="sidebar" :class="{'open': menuStatus}">
                <div class="logo-wrapper">
                    <Logo class="logo" />
                </div>
                <MenuGroup>
                    <template v-slot:title>Menu</template>
                    <MenuItem to="/artists">
                        <template v-slot:icon>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18" viewBox="0 0 18 18">
                                <image id="icons8-micro-64" width="18" height="18" xlink:href="data:image/png;base64,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"/>
                            </svg>
                        </template>
                        Artists
                    </MenuItem>
                    <MenuItem to="/collection/songs">
                        <template v-slot:icon>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18" viewBox="0 0 18 18">
                                <image id="icons8-musical-notes-64" width="18" height="18" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAACalBMVEVHcEyNbJ/qw4+NbJ+ObJ+NbJ+NbJ+NbJ+ObJ+NbKCOcaqDaJ6NbJ+NbJ+NbZ+NbJ+NbJ+LbJ6MbJ7rxI+NbKCMbJ+NbJ//AP+MbZ+NbZ/XspOMa5+JbJ2Na5+NbZ+nhJuOcZyObJ/NqJSObp/Pq5ONbJ/euZGKa6ONbJ+7mZmNbJ+Ma5yPb5722JDoxJGVdZ6efZzSrpOMbKCNa5/Sr5OPcJ/x1pGMa5+ScZ7225CZeJ2NbJ/ixpKPbZ+2lpiNbJ+WdZ6gYKCNbJ+NbJ+ObJ+NbJ+LbKGNbKCNa5+Na5+TcaCObZ+ObJ+YeZ6NbKDTrpKmhJuAgICNbZ+NbJ+Na5+NbJ+NbJ+NbJ+ObJ6PbZ6MbKCNbJ+UdJ2ObZ6Na56NbZ2Qb52MZpmNbKCNbJ+RcJ+NbJ6NbKCNbJ6Scp+NbKC8npimh5qNbZ6UdJ7Bo5enhZrTr5ONa5+vj5qOa6GNbJ+gg56NbJ6QcZ+NbJ+NbKCObZ6NbJ/53Y//65vvyI743I+nh5unh5yniJ6niZ732Y/+6pv85ZXlx5L955j/6pvu0ZH43I/pwo/01Y/sxI3y1pD00o/11I753I+Obp/xy47104/vyo7sxo7xzo7s1pv+6Zn95pb74ZPOsJbkzZy7n53oy5L035usj5753pDbw52ig5/Bpp7LsZzz2JDcvpSScp6igZu7nJjVtpXz3pyae56zlp7Msp3v0pGqjJ7CqJ21lpmce53Kr53hypyxkpqVdZ6Qb5/StJTRuJ2xlZ3nypLTu5z75pv+6JjWuJS5m5j65pvsz5HZvJTewZTcxJ3WvZzEqZ2RcJ7745Np8xsQAAAAe3RSTlMA+P7vyer+8NopCQf0f2Cc8kFx/ttdzQF6yvbYGvKI5BJo/vn71PgQ9eDAH+v1/t/a755y5iDwRdf5ysLb6L/9/QSogr3kIm3F4P46Fv2X/O4COJpPgOft+kS7uftsTC8nFJPc/s77hPaG+fFn9Pnu/KT7UZL6obVVs3ys/UIMAAAC0UlEQVRYw92W9XvaQBzG07IBhQrtypg7Y+5uXd3WbtW5u7t+gbRbobBnzoxVV5127t65/U+7BMhIcrnm+G17f8pzz70f7r3ce4Fh/ntZ1pjX5WSYIzMvWJW+XAO8smm9hvyktFzeWvD22fM3sJ7CWxQTX7hxE+fNe/S4pcOB5AWt2kWXbs0wcV5fa8N7v8sREoAqu+1wCme+d/9B/QeHSCoBh+BX08/v18Odx0/QADTgl3oBHC6Pu1YlAM0Wezs9AM12JApA0OvtrAFAzsoKOyWA87rDvXQAj9xLB8B4aQFS3bhZHTng4d07t31wKzJAY92Tp9yxXMIP0gHYd3UvXnLm2GVlSw3UgNcVGzhzZtrK1anCYBBQfKBkv7ErwCvQWkvMWeLBAKCU69riwnwLEQCwFjfIPVqhrf0gYiTHZREBioMpgG4If1sBgDZnhy0CQLBsrvqGPICoo0eMkQACF8TnH00+tB3HimgB7mtC5TvaWwHKaAHck0u4p1qgnAyYPkk/IkoCQGWrrQktg/BjSFNnB74pK0SAYDk9Xm4ZREBMd5g7b87Ys9Un5QC0jObfaBkkgCEZZk2T3AfitqItJcRlJsOMmXYiAC1DFnf+X0A3mMIKc0/jAOS4jAmirwYJFy6dAp0A+LTvKysB4OIyOoh2Xj5XxbJV5y86F0JvAaAF2Lnri2guLi6KMNEpaBH0CttkPSrT9o8sOS6TBOOvhPxDQDMoDGBJ3Iv2e8u2xm+QqRiXMephwriAf9hQiJe8Zlu2ld/1zYpx+Z0dM3L4meg+AwEGYA5acUJ5bnqqYlyk0aMC7xb6DyaVTSEur8SEvrG6nnH9mC4AuLjqrzyFuHQATFxKgDwuNUD9lytCgKzudMLUnUq4ulP98cbVnUbYutMIW3camaCHvO40EtV9T6juVBHC6r5bqLt6KdZdrVTXnXSQVNVdWSrrTpKquv+r+gMoDaLUseyEwwAAAABJRU5ErkJggg=="/>
                            </svg>
                        </template>
                        Songs
                    </MenuItem>
                    <MenuItem to="/collections">
                        <template v-slot:icon>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18" viewBox="0 0 18 18">
                                <image id="icons8-micro-50" width="18" height="18" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABpFBMVEVHcEyNbJ6NbJ+MbJ+JbZuMbZ6NbJ+NbZ+NbJ+AgKqNbJ+NbJ+Ma5+Jdp2MbJ+ObZ6ZZpmNbJ+Qb52Nap6ObJ+MbJ+NbJ+OaKGNbJ6Qb5uPcKONbJ+NbJ+Na5+ObZ/6796NbJ/v2L7Noaf/9/D205ekhqekhqajhKaUdKOni67auJn37uv20pfvy5jg0M/Gm6aQb6CQcKGkiLCcf6jkzLrv49iNbZ+VdaORcaLCq73Drr6WdqHFsMC6orm0l6yZe6aObaD67t63nreTcqLs3dWZeJ6+lKWjhqvDrb6mhJ2bfafOusX16dumia3l2N3BnpvDmabDmKb10pfNrJrn2NOad6Cfe6GRcJ+0kpznxJjxz5eTcp+hg6yulbPv4tfsyZjm19PZycyqip3l1tLwzpeuk7K2lJzLqJrtypitk7LBqr3LuMu1kpz88+3m1tLtypffz9n78e2mi7Gqj6+de56dgKv37uraysyjh6+2k5zYtpqpi6fyz5eggqrayczayMuqiJz00Zesi53Zt5nw49iqiZ2ffp62lZz57t2hhKuScaKhhKrOGDmCAAAAH3RSTlMAiebsHKnxiOUG8PrYDVB8CuInHdrP2RvWFxmqr/LvpSyrRQAAAaJJREFUWMPt11V3wjAYBuAJDObu0pe2bAxnGxvM3d3d3d3d5U+vFM7O2FZGEy55L5JeNE96vqQ5bUhIMMEIiQwNg3eiY+ITZAAq/JHUTP8BNbo57+ztHiEjy28A4H7FUIS0dBrAJaQoaADu+BSJcbEUAGfYh4+oVZH/AdzWxqTVB6H6BjDyY4aaDmAAauCrEhSAuxLSQGF7a6M0wLJss1gJacA1RUtHpzTAipXwBYyOAA315jpigF8caCsFiivtpICQsZ4moIYC4Pl+/e97ZAE8TwG83J8bqQChhIcr4xSAsATABBXwenMA1FIAwsVgVblsYHr9yvEFEGzlOZ3rRXgmBhasmNebLu+IgSUsS24hvwAdVmmBHff4GeiIgDWcGV3jjZuYIgK2bXjSm0wPt7DNki3jdZn70Cw7YcgAxu78cLy/OR8ZUuD/Yz2QgN8pZJguT08G5Gs0Wk/vBWgIEmigQKuR2fwAxKeQ2QQW0Ap1ldd8A3JRQlDECvSyrAVRApCDCwKhGkN9lmEoBSApD8QJF79mk7MjyIZHKBXBv6VgPPkE11FqOdlbQOcAAAAASUVORK5CYII="/>
                            </svg>
                        </template>
                        Collections
                    </MenuItem>
                    <MenuItem to="/collection/genres">
                        <template v-slot:icon>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18" viewBox="0 0 18 18">
                                <image id="icons8-music-record-64" width="18" height="18" xlink:href="data:image/png;base64,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"/>
                            </svg>
                        </template>
                        Genres
                    </MenuItem>
                    <MenuItem to="/favorites">
                        <template v-slot:icon>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18" viewBox="0 0 18 18">
                                <image id="icons8-heart-health-64" width="18" height="18" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAADAFBMVEVHcEyMa5yNbJ+Kap+NbJ+Ma5+PcJ+Na5+PcKObbJ2Na6CMdKKOapydbJySbZ6VapWcbJ2PbJ//AP+MbZ6AgICOa5+SbZKNbJ+NbJ+PcJ+ObKCOa6GKbp+JbJ2ObJ+SbJ+ObJ+NbKCNbZ2NbZ+Pap+MbKGLdKKRbJ6RbKCNbKCObJ+ObJ+MbJ+NbJ+NbKGQbJ+NbKCVbZ+NbJ+QbJ+Qa6CTbJ6MbaCUbZ6NbJ+Nbp6TbJ+Nap6ObJ6ObZ+NbJ6LbaCRbaCOcaqNa5+Oa6CPbJ6PbqCNbZ+ObZ+Oa6CMbJ+QbZ+NbJ+Jdp2MbJ+Na52RbZ+QbJ+NbJ6Oa6CNbJ+Pa5+RbJ6ObJ2Qb52AgICObJ+SbJ+ObJ+ZbJ6NbZ+MbJ+ObJ+NbJ+QbZ+PbZ+NbJ+NbJ+LaaGMbZ/teJngZ4+NbJ/yg6XaaJDugp76797td5n42tLvg5/oeJmkb57429LjbJHld5nja5LseJnvfZ/RaJLeZ4+ca52fb57caJDvg6DdZ5DadpqTbJ7fZ4+Ua57pgaWha5zZZ5Dpcpbyg6TncJXQdJvaZ5CwcJ3Cc5yWbZ6tapnreJnKdJvcZ5CVbZ/RdJvVaJHygqWUbZ6Za52gcaCYb5/43dOebp7sd5jueJnhaJDwfZ/wgaLqdJeyaZfkd5qRbZ/NdJuPbJ+QbZ+YbZ+1apfIeaPTaJHugqXMaJOnb52YbJ2papqabp6ga5vbdZrWaJGQbJ+gbp6fa5y8aZaRa5/1wcTeaJCWa57KaJPLdJvcdprqeJnod5rqd5n30s3gdpqbbZ6ecKCzapjfd5qhapv43NP43NPve5zueZrddprlbpOZbJ25aZa0cZzMdJu5cp2cbp6zc5+mcqDHaZS8cpySa57XaJGycJ3mbpSjaprHc5viapGqc6G3cZ3Iapacb5/Ad6L20Mzrdpejb53VdZvvepzdeJ3Ve6Ljd5rEc5yUbZ/AaZWObZ/20M27apfXZ5HbZ5DkbZLWfaOibp3gbpSlb57319H31c/jgKTkgKQmAZbsAAAAu3RSTlMAH+QY19gg3xn9IgUk/hUM/fYBWQJHB/r+EOMoJRr96u/cL3owSQu8z9TZozfMQtrDyoL2g+dbw/E64h228rFLvgl3fsZmZd9Wb3esDaeS5ZeEK/xd8DQnBMivh/3Klb3o0eHiui5S///////////////////////////////////////////////////////////////////////////////////////////////////////////////+opOl4QAAA+tJREFUWMPtl3lcFGUYxyfKIxBW8QCPNJDyAPO20rLMW7PyyA61tNJ3frugEeGyaOqCgnIjiIiYqXmgJCgEKKiVR4ofz/K+OrwtRS2703dmdsa59sL6z+cPZuH5fL/v87zXDgxzP/7zeL1m0MjXGleXDhza2g9cNBkyoJcy5ft0l44tOqNz1ydbBtmhfZ9rDVk820lWx4uDWshS3fs20uF7PE9TJQXXMouv/vTzmh+WA4/WF3MjXgXyvknYF2mO/OLbpAzg5cc0fMN6QEZyOKERlWU0Gj9bkwcEe3Epw5vA1AQihTl9PfCKl5Lv1hw49BWfv8LxnOL8DbxnYBifcahKNxN5pCWvQqvHFeM3x6oVtuwSoxi/V6GDwac9dmwn6piRglayGjzrYfkMW+rj2ZLA+G8OOrRHbiTRxvYUvCTxDfoAUo97jbK4nQN9ntZQ4i/NZH3guJSQV2Cc+TWm6vOEJKO/bTUbtEXe1ruJJa7xJG09+gmCJ4DvZIk9Ep+1wAFPSDraCIK3MD9NnoiSDOdKHfDEPB+BvOAdJCkzouET4jiS8ALHN/bHFqI1zDx6REO8v61c/usW9OQEIUAx0Rjo/BVo+IiwC4qVRA1+FwLaTqN05o/yk0Llf7iKpzjBBMCsnaDDpfb5RfHxSznkS/jZVjGcOA+JX3R6Mcuyi+MJ+VSoYDywyw1+4oesEHNIMQI4QSM/ZLrBT2bFWLoCz/D74A38WB2ePX0KvXlBS+xwwocq+Xn5vOD7FIQIt4E/LiuB8puhjsY/sPIY9ziLAF/hMAzGJaVgm2LBNfWvxkpaQ4w3Btrug2HDkaBuefc0qf5Jmv5XZ3/OstfhIV2Lo1C1y55BxW8uWytI8jdCuvYZr3bI3ao2LJym5IX134ATvCFuNIJlt7JPW3wQrmdQ82xMKsrow/Qwxhjk97rnu/hLx6DiTYnUsGEz/VAXbXyU3ywP1NLUsDssQrV/Y60W/knHf+hB9XebjiEiTFX/OlgT7fG6hr//UZ6finXWOLu8nkEIgbekchs4xgFvz2Ab/yBi88X+a9t7Q9EziPVPP4NUZ7yeQeATo6nhF4tTnmFqqgwCP91aeJJlWRd4tUGsvxKF0a7xSoO0fnMrrbf4/VejtvN3vbsGM3/+LMtM9Gc0P74rvMywnx99GaaYbP27xkuGi0L5pinY6R4vGuZw88+hOy0u9y9GnSbU8BvFThTdEspwjxcMf9Kpy0aRrQ33eGrwwB8fseyv2dZogX/E3Tf3Zh6YRQ0Vc6vJSwbKe1eLZ5imY1FJDXHeds+/U4MHNdwDz3exKdaF8+NgLdoBb98DT1+Dm3re/0f0/487NG+VrSfqD78AAAAASUVORK5CYII="/>
                            </svg>
                        </template>
                        My Favorites
                    </MenuItem>
                </MenuGroup>
                <MenuGroup>
                    <template v-slot:title>Your playlists</template>
                    <MenuItem to="/playlist/test">
                        Hits of this summer
                    </MenuItem>
                    <MenuItem to="/playlist/test1">
                        Classical Music
                    </MenuItem>
                    <MenuItem to="/playlist/test2">
                        Chillout
                    </MenuItem>
                    <MenuItem to="/playlist/test3">
                        Workout
                    </MenuItem>
                </MenuGroup>

                <Button class="playlist-button">
                    <template v-slot:icon>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 286.376 286.376" style="enable-background:new 0 0 286.376 286.376;" xml:space="preserve">
                            <g id="Add">
                                <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M268.477,125.29H161.086V17.899c0-9.885-8.013-17.898-17.898-17.898
                                    s-17.898,8.013-17.898,17.898v107.39H17.9c-9.885,0-17.9,8.013-17.9,17.898c0,9.885,8.015,17.898,17.9,17.898h107.39v107.39
                                    c0,9.885,8.013,17.898,17.898,17.898s17.898-8.013,17.898-17.898v-107.39h107.391c9.885,0,17.898-8.014,17.898-17.898
                                    C286.376,133.303,278.362,125.29,268.477,125.29z"/>
                            </g>
                        </svg>
                    </template>
                    Add new list
                </Button>
                <div class="grow"></div>

                <MenuGroup>
                    <MenuItem to="/" :faded="true">
                        <template v-slot:icon>
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                <g transform="translate(0)">
                                    <path class="cls-1" d="M9.647,16H6.357a.4.4,0,0,1-.4-.337l-.312-2.12a6.1,6.1,0,0,1-1.39-.784l-2.048.8a.428.428,0,0,1-.143.024.407.407,0,0,1-.358-.2L.057,10.616a.4.4,0,0,1,.1-.512l1.735-1.32A6.338,6.338,0,0,1,1.833,8a6.38,6.38,0,0,1,.058-.784L.156,5.9a.386.386,0,0,1-.1-.512L1.7,2.616a.4.4,0,0,1,.352-.2A.418.418,0,0,1,2.2,2.44l2.048.8a6.3,6.3,0,0,1,1.39-.784L5.953.336A.4.4,0,0,1,6.357,0h3.29a.4.4,0,0,1,.4.336l.313,2.12a6.068,6.068,0,0,1,1.39.784l2.048-.8a.428.428,0,0,1,.143-.024.408.408,0,0,1,.359.2l1.644,2.767a.4.4,0,0,1-.1.512l-1.735,1.32A6.22,6.22,0,0,1,14.171,8a6.179,6.179,0,0,1-.058.784l1.735,1.32a.4.4,0,0,1,.1.512L14.3,13.384a.4.4,0,0,1-.352.2.422.422,0,0,1-.15-.028l-2.047-.8a6.336,6.336,0,0,1-1.39.784l-.313,2.12A.4.4,0,0,1,9.647,16ZM8,5.2A2.843,2.843,0,0,0,5.124,8,2.879,2.879,0,0,0,10.88,8,2.843,2.843,0,0,0,8,5.2Z"/>
                                </g>
                            </svg>
                        </template>
                        Settings
                    </MenuItem>
                    <MenuItem to="#" :click="openAbout" :faded="true">
                        <template v-slot:icon>
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                <path d="M8,16a8,8,0,1,1,8-8A8.011,8.011,0,0,1,8,16Zm-.075-5.159a.924.924,0,0,0-.67.266.885.885,0,0,0-.274.657.862.862,0,0,0,.283.686.979.979,0,0,0,.661.245.947.947,0,0,0,.645-.248.869.869,0,0,0,.279-.682.91.91,0,0,0-.924-.923Zm.148-6.228a1.354,1.354,0,0,1,.952.341,1.1,1.1,0,0,1,.369.837.942.942,0,0,1-.121.472,1.8,1.8,0,0,1-.3.394c-.119.119-.312.3-.573.524a9.768,9.768,0,0,0-.72.686,2.251,2.251,0,0,0-.427.67,2.312,2.312,0,0,0-.162.9.832.832,0,0,0,.22.626.758.758,0,0,0,.543.211A.692.692,0,0,0,8.6,9.631c.045-.2.08-.343.1-.425a1.261,1.261,0,0,1,.1-.242A1.4,1.4,0,0,1,8.983,8.7a4.338,4.338,0,0,1,.338-.338c.518-.462.864-.779,1.058-.97a2.869,2.869,0,0,0,.509-.686A1.91,1.91,0,0,0,11.1,5.78a2.22,2.22,0,0,0-.375-1.24,2.579,2.579,0,0,0-1.064-.9A3.629,3.629,0,0,0,8.074,3.3a3.486,3.486,0,0,0-1.693.4,2.932,2.932,0,0,0-1.105,1A2.255,2.255,0,0,0,4.9,5.9a.753.753,0,0,0,.239.53.792.792,0,0,0,.587.245c.39,0,.66-.236.8-.7a2.756,2.756,0,0,1,.545-1.013A1.324,1.324,0,0,1,8.074,4.613Z"/>
                            </svg>
                        </template>
                        Version {{version}}
                    </MenuItem>
                </MenuGroup>
            </section>
    </div>
</template>

<script>
import MenuGroup from '../components/MenuGroup'
import MenuItem from '../components/MenuItem'
import Dialog from '../components/Dialog'
import projectPackage from '~/package.json'
import Logo from '../components/Logo'
import { mapActions, mapGetters } from 'vuex'
import Button from '../components/Button'
import Scrollbar from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'
Scrollbar.use(OverscrollPlugin)
export default {
  name: 'DockableSidebar',
  components: { MenuGroup, MenuItem, Logo, Button, Dialog },
  data: () => {
    return { version: projectPackage.version, aboutOpen: false }
  },
  mounted () {
    let container = this.$el.getElementsByClassName('sidebar')[0]
    Scrollbar.init(container, { overscrollEffect: 'bounce', continuousScrolling: true })
  },
  methods: {
    ...mapActions(['toggleMenuStatus']),
    openAbout () {
      this.aboutOpen = true
    },
    closeAbout () {
      this.aboutOpen = false
    }
  },
  computed: mapGetters(['menuStatus'])
}
</script>

<style lang="sass">
div#test 
    border: 1px solid rgba(0,0,0,.05)
section.handle
    position: absolute
    left: 0
    top: 0
    width: 100%
    height: 64px
    box-sizing: border-box
    transition: transform 300ms,box-shadow 200ms
    background-color: #fcfcfc
    transform: translate3d(0,-100%,0)
    display: flex
    align-items: center
    z-index: 1210
    padding: 0 1rem
    &.open
        box-shadow: 0px 2px 4px -1px rgba(0,0,0,0), 0px 4px 5px 0px rgba(0,0,0,0.04), 0px 1px 10px 0px rgba(0,0,0,0)
    .icon
        margin: 0 10px
        width: 24px
        height: 24px
        padding: 0.8rem
        cursor: pointer
        transition: background-color 200ms
        border-radius: 100%
        &:hover
            background-color: rgba(black,0.05)
        svg
            width: 24px
            height: 24px
section.overlay
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: rgba(0,0,0,0)
    z-index: 1100
    transition: background-color 200ms
    pointer-events: none
    &.open
        pointer-events: all
        background-color: rgba(0,0,0,0.1)
section.sidebar
    width: 250px
    max-width: 250px
    min-height: 100vh
    max-height: 100vh
    padding: 2rem 2rem 0rem 2rem
    box-sizing: border-box
    background-color: #fcfcfc
    display: flex
    flex-direction: column
    overflow-y: hidden
    transition: width 300ms,transform 300ms,padding 500ms
    .scroll-content
        display: flex
        flex-direction: column
    .logo-wrapper
        min-height: 48px
        .icon
            display: none
    &.open
        transform: translate3d(0%,0,0)
        padding: 1rem 0rem 0rem 1rem
        width: 300px
        overflow-y: hidden
        box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0), 0px 1px 10px 0px rgba(0,0,0,0.12)
    .playlist-button
        align-self: flex-start
    .icon
        width: 18px
        height: auto
        path
            fill: lighten(gray,20)
    .grow
        flex-grow: 1
@media(max-width: 1000px)
    section.sidebar
        width: 200px
        overflow-y: hidden
        padding: 1rem 0rem 0rem 1rem
@media(max-width: 800px)
    section.sidebar
        transform: translate3d(-100%,0,0)
        overflow-y: hidden
        z-index: 1200
        position: absolute
        left: 0
        top: 0
        .logo-wrapper
            display: flex
            .icon
                display: block
                width: 24px
                height: 24px
                padding: 0.8rem
                cursor: pointer
                transition: background-color 200ms
                border-radius: 100%
                &:hover
                    background-color: rgba(black,0.05)
                svg
                    width: 24px
                    height: 24px
        .logo
            display: none
    section.handle
        transform: translate3d(0,0%,0)
</style>
