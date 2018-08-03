# bash采用的动态作用域
value=1
function foo () {
    echo $value;
}
function bar () {
    local value=2;
    foo;
}
bar   #2