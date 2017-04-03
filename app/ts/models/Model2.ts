/**
 * Created by pathsourcecom on 17/4/4.
 */

namespace lulu {
    //可在命名空间中声明另一命名空间
    export namespace app {
        export class Model2_1 {
            public name:string = "model2_1";
        }

        export class Model2_2 {
            public name:string = "model2_2";
        }

        //命名空间名可加.
        export namespace test.e2e {
            export class test {
                public name:string = "e2e";
            }
        }
    }
}