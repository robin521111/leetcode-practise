def test(s:str):
    # mapper = "()"
    mapper = {"{":"}","[":"]","(":")"}
    stack = []
    for x in s:
        if x in mapper:
            stack.append(mapper[x])

    # stack.append(mapper["{"])
    print(stack)
    # top_element = mapper.pop()

    # print(top_element)


test("(){}[]")