// Модуль lib

export function InitForm()
{
	$("#form1").validate(
	{
		rules: 
		{
			1: 
			{
				required: true,
				minlength: 3
			},
			2: 
			{
				required: true,
				email: true 
			},
 			
		},
		messages: 
		{
			1: 
			{
				 required: "Обязательное поле",
				 minlength: "Длина имени не менее 3 символов"
			},
			2: 
			{
				 required: "Обязательное поле",
				 email: "Неправильный формат Email" 
			},
			
		}
	});
}

export function PriceForm()
{
$(document).ready(function()
{
	$("#price").click(function()
	{
		
		let sum=0; 
		$('#price :checked').each(function()
		{
			sum += parseInt($(this).val());
			
		});
		$('.sum').text(sum);	
		ShowCheckbox();
	});
			
});
}

export function PriceForm2()
{
$(document).ready(function()
{
	$("#price2").click(function()
	{
		
		let sum2=0; 
		$('#price2 :checked').each(function()
		{
			sum2 += parseInt($(this).val());
			
		});
		$('.sum2').text(sum2);	
		ShowCheckbox();
	});
			
});
}


