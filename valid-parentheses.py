class Solution:
    def isValid(self, s:str) -> bool:
        stack = []
        mapper = {"{":"}","[":"]","(":")"}
        for x in s:
            if x in mapper:
                print("yes")
                stack.append(mapper[x])
            else:
                if len(stack) != 0:
                    top_element = stack.pop()
                    print(top_element)
                    if x != top_element:
                        return False
                    else:
                        continue
                else:
                    return False
            return len(stack) == 0


isValid(null,"()")