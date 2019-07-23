var merge = function(nums1 , m, nums2, n){
    //set the position to the end of bigger array
    let current = nums1.length -1;

    while(current >= 0){
        if(n===0) return;

        if (m<1){
            nums1[current --] = nums2[--n];
            continue
        }
        if (n<1){
            nums1[current --] = nums1[--m];
            continue;
        }

        if(nums1[m-1] > nums2[n - 1]){
            nums1[current--] = nums1[--m];
        }
        else{
            nums1[current -- ] = nums2[--n];
        }
        
    }

    
}

merge([1,2,3,0,0,0],
    3,
    [2,5,6],
    3)